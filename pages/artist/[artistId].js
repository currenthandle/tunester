import Banner from '../../components/Banner';
import { Container, Grid, List, ListItem } from '@mui/material';
import KeyMetrics from '../../components/KeyMetrics';
import Discography from '../../components/Discography';
import Followers from '../../components/Followers';
import Listenership from '../../components/Listenership';
import { useEffect, useState } from 'react';
//import { Link } from 'next';
import { useRouter } from 'next/router';

import {
  loadArtist,
  loadArtists,
  loadTwitterFollowers,
  getTopCollectors,
} from '../../requests';
import ArtistPageMainSection from '../../components/ArtistPageMainSection';
import ArtistPageSideBar from '../../components/ArtistPageSideBar';
import { loadDrops } from '../../requests';

export default function artist({ artist, topCollectors }) {
  return (
    <Container className='w-[100vw] h-full p-0 m-0'>
      <Banner name={artist?.name} imgUrl={artist?.image} />
      <Grid container className='w-[100vw] h-full p-0 m-0'>
        <ArtistPageMainSection artist={artist} topCollectors={topCollectors} />
        <ArtistPageSideBar artist={artist} />
      </Grid>
    </Container>
  );
}

export async function getStaticProps(context) {
  const { artistId } = context.params;
  const data = await loadArtist(`Artist:${artistId}`);
  const artist = data.tunester_sound_xyz_stats[0];

  const { tunester_sound_xyz_transfers_agg: topCollectors } =
    await getTopCollectors(artist?.id);

  if (artist?.twitter) {
    artist.twitter = {
      handle: artist.twitter,
      followers: artist['twt_followers'],
      topCollectors,
    };
  }
  artist.spotify = {
    followers: artist['spotify_foreign_key']['spotify_followers'],
    popularity: artist['spotify_foreign_key']['popularity'],
  };

  return {
    props: {
      artist,
      topCollectors,
    },
  };
}
export async function getStaticPaths() {
  const data = await loadDrops();

  const paths = data.map((drop) => {
    return {
      params: {
        artistId: `${drop?.id.slice(7)}`,
      },
    };
  });
  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}
