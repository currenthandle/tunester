import Head from 'next/head';
import Image from 'next/image';
//import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <div className='h-screen w-screen'>
      <Banner imgUrl='https://d2i9ybouka0ieh.cloudfront.net/user-uploads/1ccc9ff4-931d-4bda-8693-643a7330bea4/AVATAR_IMAGE/1318966-oshimakesmusic.jpeg' />
    </div>
  );
}
