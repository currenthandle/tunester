import { Container, Grid, Card, Typography, Box, Link } from '@mui/material';
import Image from 'next/image';
export default function DropsItem({ drop }) {
  return (
    <Grid item xs={3}>
      <Link className='no-underline ' href={`/artist/${drop?.id.slice(7)}`}>
        <Box className='bg-white p-3 flex flex-col rounded-md'>
          <div className='flex justify-center'>
            <Box className='bg-[#0D6EBB] flex content-center	p-1.5 rounded-md bg-opacity-20'>
              <Image
                alt='album'
                src={drop['artist_name_image_relation']?.image}
                height={200}
                width={200}
              />
            </Box>
          </div>
          <Box className='px-4'>
            <h3 className='text-black font-bold pt-4 text-[20px]'>
              {drop['artist_name_image_relation'].name}
            </h3>
            <p className='text-black text-[16px] pt-2'>{drop.platform}</p>
            {/*}
            <p className='text-black text-lq py-2'>{drop.date}</p>
            {*/}
          </Box>
        </Box>
      </Link>
    </Grid>
  );
}
