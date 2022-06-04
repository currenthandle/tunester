import { Container, Card } from '@mui/material';
import Image from 'next/image';

export default function Banner(props) {
  console.log('props', props);
  return (
    <Container>
      <div className='h-[35vh] '>
        <Card className='h-[35vh] w-[50vw] relative'>
          <h1 className='absolute text-2xl font-bold lg:text-7xl bottom-0 z-10 text-red-700'>
            {props.name}
          </h1>
          <Image
            src='https://hotfm.ng/lagos/wp-content/uploads/sites/2/2021/08/Nirvana_1_1_1603883064Muzooka.jpg'
            alt='nirvana'
            layout='fill'
            objectFit='cover'
          />
        </Card>
      </div>
    </Container>
  );
}
