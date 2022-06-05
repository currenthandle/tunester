import { Card, Grid } from '@mui/material';

export default function DataItem({ title, data, width }) {
  return (
    <Grid item xs={width}>
      <Card className='py-2 px-3.5'>
        <h3 className='text-xs pb-2'>{title}</h3>
        <p className='text-2xl font-bold'>
          {typeof data !== 'undefined' ? data : '###'}
        </p>
      </Card>
    </Grid>
  );
}
