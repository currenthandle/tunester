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
  query DropsQuery {
    tunester_new_drops(
      where: { genre: { _eq: "rap" } }
      order_by: { date: desc }
      limit: 6
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
    }
  }
`;

export async function loadDrops(genre) {
  const { data } = await client.query({
    query: dropsQuery,
    //variables: { genre },
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
  //console.log('id', id);
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

/*
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from 'apollo-boost';
import gql from 'graphql-tag';
//import { getAccessToken, isLoggedIn } from './auth';

const endpointURL = 'http://localhost:9000/graphql';

const authLink = new ApolloLink((operation, forward) => {
  if (isLoggedIn()) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }
  return forward(operation);
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, new HttpLink({ uri: endpointURL })]),
  cache: new InMemoryCache(),
});

const jobDetailFragment = gql`
  fragment JobDetail on Job {
    id
    title
    company {
      id
      name
    }
    description
  }
`;

const createJobMutation = gql`
  mutation CreateJob($input: CreateJobInput) {
    job: createJob(input: $input) {
      ...JobDetail
    }
  }
  ${jobDetailFragment}
`;

const companyQuery = gql`
  query CompanyQuery($id: ID!) {
    company(id: $id) {
      id
      name
      description
      jobs {
        id
        title
      }
    }
  }
`;
const jobQuery = gql`
  query JobQuery($id: ID!) {
    job(id: $id) {
      ...JobDetail
    }
  }
  ${jobDetailFragment}
`;
const jobsQuery = gql`
  query JobsQuery {
    jobs {
      id
      title
      company {
        id
        name
      }
      description
    }
  }
`;
export async function createJob(input) {
  const {
    data: { job },
  } = await client.mutate({
    mutation: createJobMutation,
    variables: { input },
    update: (cache, { data }) => {
      cache.writeQuery({
        query: jobQuery,
        variables: { id: data.job.id },
        data,
      });
    },
  });
  return job;
}

export async function loadCompany(id) {
  const {
    data: { company },
  } = await client.query({ companyQuery, variables: { id } });
  return company;
}

export async function loadJob(id) {
  const {
    data: { job },
  } = await client.query({ query: jobQuery, variables: { id } });
  return job;
}

export async function loadJobs() {
  const {
    data: { jobs },
  } = await client.query({ query: jobsQuery, fetchPolicy: 'no-cache' });
  return jobs;
}
*/
