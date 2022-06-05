import { Card, Grid, Container } from '@mui/material';
import Item from './DataItem';

export default function Listenership() {
  const width = 6;
  return (
    <Container className='section'>
      <h2 className='section-title'>Listenership</h2>
      <Grid container spacing={2}>
        <Item title='Total Monthly Listeners' data={'50k'} width={width} />
        <Item title='Audius Monthly Listeners' data={'50k'} width={width} />
        <Item title='Spotify Monthly Listeners' data={'50k'} width={width} />
        <Item title='Apple Monthly Listeners' data={'50k'} width={width} />
      </Grid>
    </Container>
  );
}
