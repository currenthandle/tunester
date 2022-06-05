import { Container, Card } from '@mui/material';
import Image from 'next/image';
import { fLCapital } from '../utils';

export default function Banner({ name, imgUrl }) {
  const url = name ? imgUrl : '/discover_page_header.svg';
  return (
    <Container className='h-[20vh] relative m-0 max-w-none w-[100vw]'>
      {name ? (
        <h1 className='text-shadow-custom absolute text-2xl font-bold lg:text-7xl bottom-5 left-7 z-10 text-white'>
          {fLCapital(name)}
        </h1>
      ) : (
        <h1 className='text-shadow-custom absolute text-2xl font-bold lg:text-7xl bottom-5 left-7 z-10 text-white'>
          Discover
        </h1>
      )}
      <Image src={url} alt='nirvana' layout='fill' objectFit='cover' />
    </Container>
  );
}
