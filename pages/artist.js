import Banner from '../components/Banner';
import { Container } from '@mui/material';
import KeyMetrics from '../components/KeyMetrics';
import Discography from '../components/Discography';
import Followers from '../components/Followers';
import Listenership from '../components/Listenership';
import { useEffect, useState } from 'react';

import { loadArtist, loadArtists } from '../requests';

export default function artist() {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const id = 'Artist:d35489e0-dcb3-40dd-8bc7-5b0586bfa5e8';
    console.log('initializing artist', artist);

    const callLoadArtist = async (id) => {
      const artist = await loadArtist(id);
      console.log('artist', artist);
      return artist;
    };
    if (artist) {
      console.log('artist', artist);
    } else {
      callLoadArtist(id);
      setArtist(artist);
      console.log('artist not loaded');
    }

    const callLoadArtists = async () => {
      const artists = await loadArtists();
      console.log('artists', artists);
    };
    //callLoadArtists();
  }, [artist]);
  console.log('state', artist);

  return (
    <Container maxWidth='md' style={{ height: '30%' }}>
      <Banner name={artist?.name} />
      <KeyMetrics />
      <Discography />
      <Followers />
      <Listenership />
    </Container>
  );
}
