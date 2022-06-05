import Banner from '../components/Banner';
import { Container, Grid, List, ListItem } from '@mui/material';
import KeyMetrics from '../components/KeyMetrics';
import Discography from '../components/Discography';
import Followers from '../components/Followers';
import Listenership from '../components/Listenership';
import { useEffect, useState } from 'react';
//import { Link } from 'next';

import { loadArtist, loadArtists } from '../requests';
import ArtistPageMainSection from '../components/ArtistPageMainSection';
import ArtistPageSideBar from '../components/ArtistPageSideBar';

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
        <ArtistPageMainSection artist={artist} />
        <ArtistPageSideBar artist={artist} />
      </Grid>
    </Container>
  );
}
