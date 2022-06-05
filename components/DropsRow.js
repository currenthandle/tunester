import { Container, Grid, Card, Typography, Box, Link } from '@mui/material';
import { fLCapital } from '../utils';
import DropsItem from './DropsItem';

export default function DropsSlider({ drops, genre }) {
  return (
    <Container className='section' id={genre}>
      <h2 className='section-title'>{fLCapital(genre)}</h2>
      <Grid container spacing={4}>
        {drops?.map((drop) => (
          <DropsItem key={drop.image + Math.random()} drop={drop} />
        ))}
      </Grid>
    </Container>
  );
}
