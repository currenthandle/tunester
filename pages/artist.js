import Banner from '../components/Banner';
import { Container } from '@mui/material';
import KeyMetrics from '../components/KeyMetrics';
import Discography from '../components/Discography';

export default function artist() {
  return (
    <Container maxWidth='md' style={{ height: '30%' }}>
      <Banner />
      <KeyMetrics />
      <Discography />
    </Container>
  );
}
