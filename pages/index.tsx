import * as React from 'react';
import { Container, Typography, Box, useMediaQuery } from '@mui/material';
import Link from '../components/from_template/Link';
import ProTip from '../components/from_template/ProTip';
import Copyright from '../components/from_template/Copyright';
import Image from 'next/image';

export default function Home() {
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <Container maxWidth="lg">
      {matches ? <></> :
        <Container>
          <Image
            style={{
              transform: 'rotate(0.8turn)',
              margin: 10,
            }}
            alt='For vehicle search'
            width={150}
            height={150}
            placeholder="blur"
            blurDataURL='/images/arrow.png'
            src={'/images/arrow.png'} />
          <ProTip />
        </Container>}
      <Box
        height='100%'
        my={4}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
      <Typography variant="h4" component="h1" gutterBottom>
        Sample project to get gata from different api
      </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Here you can look for car safety ratings and recalls (US market) 
        </Typography>
        <a href="https://www.flaticon.com/free-icons/searcher" title="searcher icons">Used icons: Searcher icons created by Freepik - Flaticon</a>
        <a href="https://github.com/Ilya-Korsak/car_safety_rating_web_app" title="git">Project github</a>
      </Box>
    </Container>
  );
};