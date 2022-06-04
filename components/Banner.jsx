import Image from 'next/image';

export default function Banner() {
  return (
    <div className='flex flex-col h-[35vh] '>
      <div className='absolute top-0 -z-10 h-[35vh] w-[50vw]'>
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
