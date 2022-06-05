import { Container, Grid } from '@mui/material';
import Followers from './Followers';
import Listenership from './Listenership';

export default function ArtistPageSideBar({ artist }) {
  return (
    <Grid item xs={3} className='bg-[#EEEFF2] border-l border-[#dadada]'>
      <Container className='section border-b border-[#DADADA]'>
        <h2 className='section-title pt-4'>Artist Breakdown</h2>
      </Container>
      <Followers twitter={artist?.twitter} />
      <Listenership spotify={artist?.spotify} />
    </Grid>
  );
}
