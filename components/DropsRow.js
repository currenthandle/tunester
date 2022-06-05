import { Container, Grid, Card, Typography, Box, Link } from '@mui/material';
import DropsItem from './DropsItem';
export default function DropsSlider({ drops }) {
  return (
    <Container className='section'>
      <h2 className='section-title'>Discography</h2>
      <Grid container spacing={2}>
        {drops?.map((drop) => (
          <DropsItem key={drop.artistId + drop.name} drop={drop} />
        ))}
      </Grid>
    </Container>
  );
}
