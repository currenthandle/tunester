import { Container, Grid } from '@mui/material';
import Discography from './Discography';
import KeyMetrics from './KeyMetrics';
import TopTenCollectors from './TopTenCollectors';

export default function ArtistPageMainSection({ artist, topCollectors }) {
  return (
    <Grid item className='m-0 p-0 max-w-none' xs={9}>
      <Container className='m-0 p-0 bg-[#EEEFF2] h-full max-w-none'></Container>
    </Grid>
  );
}
