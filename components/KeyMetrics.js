import { Card, Container, Grid } from '@mui/material';
import MetricItem from './DataItem';
export default function KeyMetric({
  primarySales,
  secondarySales,
  uniqueCollectors,
}) {
  const width = 3;
  return (
    <Container className='section'>
      <h2 className='section-title'>Key Metrics</h2>
      <p className='text-[#8F8F8F] mb-3.5'>
        Across Sound.xyz, Catalog and Mint Songs
      </p>
      <Grid container spacing={2}>
        <MetricItem
          title='Total Primary Sales'
          data={primarySales}
          width={width}
        />
        <MetricItem
          title='Total Secondary Sales'
          data={secondarySales}
          width={width}
        />
        <MetricItem
          title='No. Unique Collectors'
          data={uniqueCollectors}
          width={width}
        />
      </Grid>
    </Container>
  );
}
