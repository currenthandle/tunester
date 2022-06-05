import { Container, Card } from '@mui/material';
import Image from 'next/image';

export default function Banner(props) {
  const fLCapital = (s) => s?.replace(/./, (c) => c.toUpperCase());
  return (
    <Container className='h-[20vh] relative m-0 max-w-none w-[100vw]'>
      <h1 className='absolute text-2xl font-bold lg:text-7xl bottom-5 left-7 z-10 text-white'>
        {fLCapital(props.name)}
      </h1>
      <Image
        src='https://hotfm.ng/lagos/wp-content/uploads/sites/2/2021/08/Nirvana_1_1_1603883064Muzooka.jpg'
        alt='nirvana'
        layout='fill'
        objectFit='cover'
      />
    </Container>
  );
}
