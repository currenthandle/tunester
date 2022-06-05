import Banner from '../components/Banner';
import { Container, Grid, List, ListItem } from '@mui/material';
import KeyMetrics from '../components/KeyMetrics';
import Discography from '../components/Discography';
import Followers from '../components/Followers';
import Listenership from '../components/Listenership';
import { useEffect, useState } from 'react';
//import { Link } from 'next';

import {
  loadArtist,
  loadArtists,
  loadTwitterFollowers,
  getTopCollectors,
} from '../requests';
import ArtistPageMainSection from '../components/ArtistPageMainSection';
import ArtistPageSideBar from '../components/ArtistPageSideBar';

export default function artist({ artist }) {
  //console.log('artist', artist);
  return (
    <Container className='w-[100vw] h-full p-0 m-0'>
      <Banner name={artist?.name} imgUrl={artist?.image} />
      <Grid container className='w-[100vw] h-full p-0 m-0'>
        <ArtistPageMainSection artist={artist} />
        <ArtistPageSideBar artist={artist} />
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const data = await loadArtist();
  const artist = data.tunester_sound_xyz_stats[0];
  const topCollectors = await getTopCollectors(artist.id);
  console.log('topCollectors', topCollectors);
  artist.twitter = {
    handle: artist.twitter,
    followers: artist['twt_followers'],
    topCollectors,
  };

  return {
    props: {
      artist,
    },
  };
}
