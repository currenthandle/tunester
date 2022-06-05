import Head from 'next/head';
import Image from 'next/image';
//import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import Banner from '../components/Banner';
import IndexPageMainSection from '../components/IndexPageMainSection';
import IndexPageSideBar from '../components/IndexPageSideBar';
import { loadDrops } from '../requests';

export default function Home({ drops }) {
  return (
    <Container className='w-[100vw] h-full p-0 m-0'>
      <Banner imgUrl='https://d2i9ybouka0ieh.cloudfront.net/user-uploads/1ccc9ff4-931d-4bda-8693-643a7330bea4/AVATAR_IMAGE/1318966-oshimakesmusic.jpeg' />
      <Grid container className='w-[100vw] h-full p-0 m-0'>
        <IndexPageSideBar />
        <IndexPageMainSection drops={drops} />
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const rap = await loadDrops('pop');

  return {
    props: {
      drops: rap,
    },
  };
}
