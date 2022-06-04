import { Container, Grid, Card, Typography, Box } from '@mui/material';
import Image from 'next/image';
import DiscoItem from './DiscoItem';
export default function Discography() {
  return (
    <Container className='section'>
      <h2 className='section-title'>Discography</h2>
      <Grid container spacing={2}>
        <DiscoItem />
        <DiscoItem />
        <DiscoItem />
        <DiscoItem />
        <DiscoItem />
        <DiscoItem />
      </Grid>
    </Container>
  );
}
