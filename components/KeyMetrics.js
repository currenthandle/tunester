import { Card, Container, Grid } from '@mui/material';
export default function KeyMetric() {
  return (
    <Container>
      <h2>Key Metrics</h2>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>hello</Card>
        </Grid>
        <Grid item xs={4}>
          <Card>hello</Card>
        </Grid>
        <Grid item xs={4}>
          <Card>hello</Card>
        </Grid>
      </Grid>
    </Container>
  );
}
