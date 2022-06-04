import { Card, Grid, Container } from '@mui/material';

export default function Listenership() {
  return (
    <Container className='section'>
      <h2 className='section-title'>Listenership</h2>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card>
            <h3>Total Monthly Listeners</h3>
            <p>###</p>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <h3>Audius Monthly Listeners</h3>
            <p>###</p>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <h3>Spotify Monthly Listeners</h3>
            <p>###</p>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <h3>Apple Music Monthly Listeners</h3>
            <p>###</p>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
