import requests
import json
from sys import path
import pandas as pd
import spotipy

#how to import from postgres to dataframe
#import the relevant sql library 
import sqalchemy
from sqlalchemy import create_engine
conn_string = "" #ADD ME
engine = create_engine(conn_string, echo = False)
table_name = 'sound_xyz_stats'
schema = 'tunester'
df = pd.read_sql('select * from tunester.sound_xyz_stats', con=engine)


# get dataframes from repo after we've already uploaded them
drops_new = pd.read_sql('select * from tunester.new_drops', con=engine)
sounds_xyz_data = pd.read_sql('select * from tunester.sound_xyz_stats', con=engine)
spot_data = pd.read_sql('select * from tunester.spotify_data', con=engine)

def get_sounds_response():
    """Get request response from sounds_xyz.
    """
    url = "https://www.sound.xyz/trending?type=artists&timespan=all"
    response = requests.get(url)
    a = response.text.find('{"props":{"pageProps":{"initialApolloState')
    print(response.text[a:-23])
    d = json.loads(response.text[a:-23])["props"]["pageProps"]["initialApolloState"]
    return d

def build_dataframe(d2):
    """Build dataframe from sounds_xyz response."""
    names_col = []
    sound_handle_col = []
    users = []
    public_address = []
    twitter_handle = []
    ids_col = []
    images = []
    media_to_url = {}
    #print(d)
    for key,val in d2.items():
        if val['__typename']=="Artist":
            #print(val)
            ids_col.append("Artist:"+val["id"])
            names_col.append(val["name"])
            sound_handle_col.append(val["soundHandle"])
            user = d2[val["user"]["__ref"]]
            images.append(user["avatar"]["__ref"])
            users.append("User:"+user["id"])
            twitter_handle.append(user["twitterHandle"])
            public_address.append(user["publicAddress"])
        if val["__typename"]=="Media":
            media_to_url["Media:"+val["id"]] = val["url"]
        

    df = pd.DataFrame()
    df["name"] = names_col
    df["sound_handle"] = sound_handle_col
    df["public_address"] = public_address
    df["twitter"] = twitter_handle
    #print(media_to_url.keys())
    df["image"] = [media_to_url[i] for i in images]
    #print(list(zip(ids_col,users)))
    df["id"] = ids_col
    #print(d["ROOT_QUERY"])
    #print(len(d))
    queries = d2["ROOT_QUERY"]
    #print(queries)
    l = queries['getTrendingArtistInfo({"sort":"totalSales","timePeriod":"ALL_TIME"})']
    #print(l)
    df.insert(6, 'total_sales', [0]*len(df))
    df.insert(7, 'primary_sales', [0]*len(df))
    df.insert(8, 'secondary_sales', [0]*len(df))
    df.insert(9, 'unique_collectors', [0]*len(df))
    df.insert(10, 'nfts_sold', [0]*len(df))

    for trend_info in l:
        ID = trend_info['artist']['__ref']
        df.loc[df["id"]==ID,"total_sales"]= int(trend_info["totalSales"])/1e18
        df.loc[df["id"]==ID,"primary_sales"]= int(trend_info["primarySales"])/1e18
        df.loc[df["id"]==ID,"secondary_sales"]= int(trend_info["secondarySales"])/1e18
        df.loc[df["id"]==ID,"unique_collectors"]= trend_info["uniqueCollectors"]
        df.loc[df["id"]==ID,"nfts_sold"]= trend_info["nftsSold"]  
    return df

def deploy_sounds_df(df2):
    df2.to_sql(
        "sound_xyz_stats", 
        schema="tunester", 
        con=engine, 
        dtype={'drops': sqlalchemy.types.JSON}, 
        if_exists="replace")
    return 

def check_sounds():
    print(engine.execute("SELECT * FROM tunester.sound_xyz_stats").fetchone())

    
