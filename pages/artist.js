import Banner from '../components/Banner';
import { Container } from '@mui/material';
import KeyMetrics from '../components/KeyMetrics';
import Discography from '../components/Discography';
import Followers from '../components/Followers';
import Listenership from '../components/Listenership';

export default function artist() {
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
