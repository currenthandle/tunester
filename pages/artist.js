import Banner from '../components/Banner';
import { Container } from '@mui/material';
import KeyMetrics from '../components/KeyMetrics';
import Discography from '../components/Discography';
import Followers from '../components/Followers';
import Listenership from '../components/Listenership';
import { useEffect } from 'react';

import { loadArtist } from '../requests';

export default function artist() {
  useEffect(() => {
    const id = 'asdfsa';
    const callLoadArtist = async (id) => {
      loadArtist(id);
    };
    callLoadArtist(id);
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
