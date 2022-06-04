import { Card, Container, Grid } from '@mui/material';
export default function Followers() {
  return (
    <Container className='section'>
      <h2 className='section-title'>Followers</h2>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Card>
            <h3>Instagram</h3>
            <p>###</p>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <h3>Twitter</h3>
            <p>###</p>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <h3>TikTok</h3>
            <p>###</p>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <h3>Youtube</h3>
            <p>###</p>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
