import { Container, Card } from '@mui/material';
import Image from 'next/image';

export default function Banner() {
  return (
    <Container>
      <div className='flex flex-col h-[35vh] '>
        <Card className='absolute top-0 -z-10 h-[35vh] w-[50vw]'>
          <Image
            src='https://hotfm.ng/lagos/wp-content/uploads/sites/2/2021/08/Nirvana_1_1_1603883064Muzooka.jpg'
            alt='nirvana'
            layout='fill'
            objectFit='cover'
          />
          <h1 className='text-2xl font-bold lg:text-7xl bottom-0 z-10 text-red-700'>
            NIRVANA
          </h1>
        </Card>
      </div>
    </Container>
  );
}
