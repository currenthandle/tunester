import { Container, Grid, Card, Typography, Box } from '@mui/material';
import Image from 'next/image';
export default function Discography() {
  return (
    <Container className='section'>
      <h2 className='section-title'>Discography</h2>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box>
            <Image
              alt='album'
              src='https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg'
              height={100}
              width={100}
            />
            <Box>
              <h3>Drop Name</h3>
              <p>Platform dropped</p>
              <p>3/20/22</p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Image
              alt='album'
              src='https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg'
              height={100}
              width={100}
            />
            <Box>
              <h3>Drop Name</h3>
              <p>Platform dropped</p>
              <p>3/20/22</p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Image
              alt='album'
              src='https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg'
              height={100}
              width={100}
            />
            <Box>
              <h3>Drop Name</h3>
              <p>Platform dropped</p>
              <p>3/20/22</p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Image
              alt='album'
              src='https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg'
              height={100}
              width={100}
            />
            <Box>
              <h3>Drop Name</h3>
              <p>Platform dropped</p>
              <p>3/20/22</p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Image
              alt='album'
              src='https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg'
              height={100}
              width={100}
            />
            <Box>
              <h3>Drop Name</h3>
              <p>Platform dropped</p>
              <p>3/20/22</p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Image
              alt='album'
              src='https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg'
              height={100}
              width={100}
            />
            <Box>
              <h3>Drop Name</h3>
              <p>Platform dropped</p>
              <p>3/20/22</p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
