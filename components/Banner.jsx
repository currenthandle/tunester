import { Container, Card } from '@mui/material';
import Image from 'next/image';

export default function Banner({ name, imgUrl }) {
  const fLCapital = (s) => s?.replace(/./, (c) => c.toUpperCase());
  return (
    <Container className='h-[20vh] relative m-0 max-w-none w-[100vw]'>
      {name && (
        <h1 className='absolute text-2xl font-bold lg:text-7xl bottom-5 left-7 z-10 text-white'>
          {fLCapital(name)}
        </h1>
      )}
      <Image src={imgUrl} alt='nirvana' layout='fill' objectFit='cover' />
    </Container>
  );
}
