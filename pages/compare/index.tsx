import NextLink from 'next/link'
//import { Link as MUILink } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../../components/from_template/Link';
import ProTip from '../../components/from_template/ProTip';
import Copyright from '../../components/from_template/Copyright';
/*
        <NextLink href="/" passHref >
          <Button>Go Back</Button>
          </NextLink> */
export default function About() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Compare cars
        </Typography>
        <Box maxWidth="sm">
        <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}