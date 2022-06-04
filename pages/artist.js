import Banner from '../components/Banner';
import { Container, Grid } from '@mui/material';
import KeyMetrics from '../components/KeyMetrics';
import Discography from '../components/Discography';
import Followers from '../components/Followers';
import Listenership from '../components/Listenership';
import { useEffect, useState } from 'react';

import { loadArtist, loadArtists } from '../requests';

export default function artist() {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    console.log('initializing artist', artist);

    const callLoadArtist = async (id) => {
      const data = await loadArtist(id);
      //console.log('artist', artist);
      const artist = data.tunester_sound_xyz_stats[0];
      //return artist;
      setArtist(artist);
    };

    const id = 'Artist:d35489e0-dcb3-40dd-8bc7-5b0586bfa5e8';
    callLoadArtist(id);

    const callLoadArtists = async () => {
      const artists = await loadArtists();
      console.log('artists', artists);
    };
    //callLoadArtists();
  }, [artist]);
  console.log('state', artist);

  return (
    <Grid className='w-[100vw] h-full p-0'>
      <Grid item xs={12}>
        <Container className='m-0 p-0'>
          <Banner name={artist?.name} />
          <Container className='m-0 p-0 bg-[#F5F5F5] h-full'>
            <KeyMetrics
              primarySales={artist?.primary_sales}
              secondarySales={artist?.secondary_sales}
              uniqueCollectors={artist?.unique_collectors}
            />
            <Discography />
            <Followers />
            <Listenership />
          </Container>
        </Container>
      </Grid>
    </Grid>
  );
}
