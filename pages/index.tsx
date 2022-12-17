import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../components/from_template/Link';
import ProTip from '../components/from_template/ProTip';
import Copyright from '../components/from_template/Copyright';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
      bgcolor={'red'}
      height='100%'
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <a href="https://www.flaticon.com/free-icons/searcher" title="searcher icons">Searcher icons created by Freepik - Flaticon</a>
        <ProTip />
        <Copyright />
      </Box>
      </Container>
  );
};