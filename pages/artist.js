import Banner from '../components/Banner';
import { Container } from '@mui/material';
import KeyMetrics from '../components/KeyMetrics';
import Discography from '../components/Discography';
import Followers from '../components/Followers';
import Listenership from '../components/Listenership';
import { useEffect } from 'react';

import { loadArtist, loadArtists } from '../requests';

export default function artist() {
  useEffect(() => {
    const id = 'Artist:d35489e0-dcb3-40dd-8bc7-5b0586bfa5e8';
    const callLoadArtist = async (id) => {
      const artist = await loadArtist(id);
      console.log('artist', artist);
    };
    callLoadArtist(id);

    const callLoadArtists = async () => {
      const artists = await loadArtists();
      console.log('artists', artists);
    };
    //callLoadArtists();
  });

  return (
    <Container maxWidth='md' style={{ height: '30%' }}>
      <Banner />
      <KeyMetrics />
      <Discography />
      <Followers />
      <Listenership />
    </Container>
  );
}
