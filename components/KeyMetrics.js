import { Card, Container, Grid } from '@mui/material';
export default function KeyMetric() {
  return (
    <Container>
      <h2>Key Metrics</h2>
      <p>Across Sound.xyz, Catalog and Mint Songs</p>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>
            <h3>Total Primary Sales</h3>
            <p>###</p>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <h3>Total Secondary Sales</h3>
            <p>###</p>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <h3>No. Unique Collectors</h3>
            <p>###</p>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
