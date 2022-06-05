import { Container, Grid, Card, Typography, Box, Link } from '@mui/material';
import DropsItem from './DropsItem';
export default function DropsSlider({ drops, genre }) {
  return (
    <Container className='section' id={genre}>
      <h2 className='section-title'>{genre}</h2>
      <Grid container spacing={2}>
        {drops?.map((drop) => (
          <DropsItem key={drop.image + Math.random()} drop={drop} />
        ))}
      </Grid>
    </Container>
  );
}
