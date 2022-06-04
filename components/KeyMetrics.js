import { Card, Container, Grid } from '@mui/material';
export default function KeyMetric({
  primarySales,
  secondarySales,
  uniqueCollectors,
}) {
  return (
    <Container className='section'>
      <h2 className='section-title'>Key Metrics</h2>
      <p>Across Sound.xyz, Catalog and Mint Songs</p>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>
            <h3>Total Primary Sales</h3>
            <p>{primarySales}</p>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <h3>Total Secondary Sales</h3>
            <p>{secondarySales}</p>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <h3>No. Unique Collectors</h3>
            <p>{uniqueCollectors}</p>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
