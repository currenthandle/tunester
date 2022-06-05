import requests
from bs4 import BeautifulSoup
import json
import pandas as pd

import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

def get_spotify_links(df):
    base_url = "https://www.sound.xyz/"
    slugs = df["sound_handle"]
    #slugs = ["snoopdogg"]
    artist_ids = []
    for slug in slugs:
        url = base_url + slug
        response = requests.get(url)
        loc = response.text.find("spotifyUrl")
        if loc != -1:
            loc2 = response.text[loc:].find(",")
            d = '{"' + response.text[loc:loc+loc2] + '}'
            spot_url = json.loads(d)["spotifyUrl"]
            if spot_url == None:
                artist_id = ""
            else:
                artist_id = json.loads(d)["spotifyUrl"].split("/")[-1]
            artist_ids.append(artist_id)
        else:
            artist_ids.append(None)

    spot_df = pd.DataFrame()
    spot_df["sound_xyz_slugs"] = slugs
    spot_df["artist_ids"] = artist_ids
    return spot_df

def add_artist_genres_and_followers(spot_df):
    spotify = spotipy.Spotify(client_credentials_manager=SpotifyClientCredentials())
    genres = []
    followers = []
    popularities = []
    ref_genres = ["pop", "rap", "hip hop", "electronic", "country", "rock", "edm", "house", "r&b", "vapor twitch"]
    for artist_id in spot_df["artist_ids"]:
        if artist_id != "":
            uri = 'spotify:artist:' + artist_id
            results = spotify.artist(uri)
            #print(results)
            follower = results["followers"]["total"] 
            followers.append(follower)
            popularity = results["popularity"]
            popularities.append(popularity)
            found = False
            for res_genre in results["genres"]:
                for ref_genre in ref_genres:
                    if ref_genre in res_genre:
                            if ref_genre == "edm" or ref_genre == "house":
                                ref_genre = "electronic"
                            genres.append(ref_genre)
                            found = True
                            break
                if found:
                    break
            if not found:
                #print(results["genres"])
                genres.append("other")
        else:
            genres.append(None)
            popularities.append(0)
            followers.append(0)
    spot_df["genre"] = genres
    spot_df["popularity"] = popularities
    spot_df["spotify_followers"] = followers
    return spot_df


def get_spotify_listener_counts(df):
    listener_counts = []
    for artist in df["artist_ids"]:
        if artist != "":
            url = "https://open.spotify.com/artist/" + artist
            response = requests.get(url)
            soup = BeautifulSoup(response.text)
            raw_listeners = soup.find_all("div", {"data-testid":"monthly-listeners-label"})[0].text

            result = ""
            for char in raw_listeners:
                if char.isdigit():
                    result += char 
            listener_counts.append(int(result))
        else:
            listener_counts.append(0)

    df["monthlyListeners"] = listener_counts
    return df