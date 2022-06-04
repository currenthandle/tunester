import { Container, Grid, Card, Typography, Box } from '@mui/material';
import Image from 'next/image';
export default function DiscoItem() {
  return (
    <Grid item xs={2}>
      <Box className='bg-white p-3 flex flex-col rounded-md'>
        <div className='flex justify-center'>
          <Box className='bg-[#0D6EBB] flex content-center	p-1.5 rounded-md bg-opacity-20'>
            <Image
              alt='album'
              src='https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg'
              height={200}
              width={200}
            />
          </Box>
        </div>
        <Box>
          <h3 className='font-bold pt-4'>Drop Name</h3>
          <p className='text-xs pt-2'>Platform dropped</p>
          <p className='text-xs py-2'>3/20/22</p>
        </Box>
      </Box>
    </Grid>
  );
}
