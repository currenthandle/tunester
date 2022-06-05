import Banner from '../components/Banner';
import { Container, Grid, List, ListItem } from '@mui/material';
import KeyMetrics from '../components/KeyMetrics';
import Discography from '../components/Discography';
import Followers from '../components/Followers';
import Listenership from '../components/Listenership';
import { useEffect, useState } from 'react';
//import { Link } from 'next';

import { loadArtist, loadArtists } from '../requests';

export default function artist() {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const callLoadArtist = async (id) => {
      const data = await loadArtist(id);
      const artist = data.tunester_sound_xyz_stats[0];
      //return artist;
      setArtist(artist);
    };

    const id = 'Artist:d35489e0-dcb3-40dd-8bc7-5b0586bfa5e8';
    callLoadArtist(id);

    const callLoadArtists = async () => {
      const artists = await loadArtists();
      console.log('allArtists', artists);
    };
    callLoadArtists();
  }, [artist]);
  /*
const drops = {
  JSON.parse(artist?.drop)
};
*/
  console.log('artist', artist?.drops);
  return (
    <Container className='w-[100vw] h-full p-0 m-0'>
      <Banner name={artist?.name} />
      <Grid container className='w-[100vw] h-full p-0 m-0'>
        <Grid item id='tester' className='m-0 p-0 max-w-none' xs={9}>
          <Container className='m-0 p-0 bg-[#EEEFF2] h-full max-w-none'>
            <KeyMetrics
              primarySales={artist?.primary_sales}
              secondarySales={artist?.secondary_sales}
              uniqueCollectors={artist?.unique_collectors}
            />
            <Discography drops={artist?.drops} />
          </Container>
        </Grid>
        <Grid item xs={3} className='bg-[#EEEFF2] border-l border-[#dadada]'>
          <Container className='section border-b border-[#DADADA]'>
            <h2 className='section-title pt-4'>Artist Breakdown</h2>
          </Container>
          <Followers />
          <Listenership />
        </Grid>
      </Grid>
    </Container>
  );
}
