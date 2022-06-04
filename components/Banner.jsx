import Image from 'next/image';
import { Container } from '@mui/material';

export default function Banner() {
  return (
    <div className='flex flex-col h-[35vh] '>
      <div className='absolute top-0 left-0 -z-10 h-[15vh] w-screen'>
        <Image
          src='https://hotfm.ng/lagos/wp-content/uploads/sites/2/2021/08/Nirvana_1_1_1603883064Muzooka.jpg'
          alt='nirvana'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  );
}
