import { Container, Grid } from '@mui/material';
//import artist from '../pages/artist/[artistId]';
import DropsSlider from './DropsRow';

export default function IndexPageMainSection({ drops }) {
  return (
    <Grid item className='m-0 p-0 max-w-none' xs={9}>
      <Container className='m-0 p-0 bg-[#EEEFF2] h-full max-w-none'>
        <DropsSlider drops={drops.pop} genre='pop' />
        <DropsSlider drops={drops.rAndB} genre='r&b' />
        <DropsSlider drops={drops.rap} genre='rap' />
        <DropsSlider drops={drops.electronic} genre='electronics' />
      </Container>
    </Grid>
  );
}
