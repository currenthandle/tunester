import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';

const endpointURL = 'https://brave-unicorn-25.hasura.app/v1/graphql';

const client = new ApolloClient({
  link: new HttpLink({
    uri: endpointURL,
    headers: {
      //Authorization: `Bearer ${process.env.NEXT_PUBLIC_HASURA_API_KEY}`,
      'X-Hasura-Admin-Secret': process.env.NEXT_PUBLIC_HASURA_SECRET,
    },
  }),
  cache: new InMemoryCache(),
});

const artistQuery = gql`
  query ArtistQuery($artistId: String!) {
    tunester_sound_xyz_stats(where: { id: { _eq: $artistId } }) {
      id
      index
      name
      nfts_sold
      primary_sales
      public_address
      secondary_sales
      sound_handle
      total_sales
      twitter
      drops
      unique_collectors
      twt_followers
      image
      spotify_foreign_key {
        genre
        popularity
        spotify_followers
      }
    }
  }
`;

const artistsQuery = gql`
  query ArtistsQuery {
    tunester_sound_xyz_stats {
      id
      index
      name
      nfts_sold
      primary_sales
      public_address
      secondary_sales
      sound_handle
      total_sales
      twitter
      twt_followers
      unique_collectors
      drops
      image
      genre
    }
  }
`;

const topTenCollectorsQuery = gql`
  query TopTenCollectors {
    tunester_sound_xyz_transfers_agg(
      order_by: { unique_nfts: desc, artist_id: asc }
      where: { name: { _eq: "Snoop Dogg" } }
      limit: 10
    ) {
      owners
      unique_nfts
      total_spend
      platform
    }
  }
`;
const dropsQuery = gql`
  query DropsQuery($genre: String!) {
    tunester_new_drops(
      where: { genre: { _eq: $genre } }
      order_by: { date: desc }
      limit: 4
    ) {
      id
      artistId
      date
      genre
      image
      index
      name
      numSold
      platform
      quantity
      soundHandle
      image
      artist_name_image_relation {
        name
        image
      }
    }
  }
`;

export async function loadDrops(genre) {
  const { data } = await client.query({
    query: dropsQuery,
    variables: { genre },
  });
  return data.tunester_new_drops;
}

export async function getTopCollectors(artistId) {
  const { data } = await client.query({
    query: topTenCollectorsQuery,
  });
  return data;
}

export async function loadArtists() {
  const { data } = await client.query({ query: artistsQuery });

  return data;
}

export async function loadArtist(id) {
  const { data } = await client.query({
    query: artistQuery,
    variables: { artistId: id },
  });
  return data;
}

const twitterFollowersQuery = gql`
  query TwitterFollowers($handle: String!) {
    tunester_twitter_follower_count(where: { twitter: { _eq: $handle } }) {
      follower_count
      twitter
    }
  }
`;

export async function loadTwitterFollowers(handle) {
  const { data } = await client.query({
    query: twitterFollowersQuery,
    variables: { handle },
  });

  return data;
}
