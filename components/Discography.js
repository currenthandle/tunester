import { Container, Grid, Card, Typography, Box } from '@mui/material';
import Image from 'next/image';
import DiscoItem from './DiscoItem';
export default function Discography({ drops }) {
  console.log('drops', drops);
  return (
    <Container className='section'>
      <h2 className='section-title'>Discography</h2>
      <Grid container spacing={2}>
        {drops?.map((drop) => (
          <DiscoItem key={drop[1]} drop={drop} />
        ))}
      </Grid>
    </Container>
  );
}
