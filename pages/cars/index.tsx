import NextLink from 'next/link'
//import { Link as MUILink } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Link from '../../components/from_template/Link';
import ProTip from '../../components/from_template/ProTip';
import Copyright from '../../components/from_template/Copyright';
import Grid from '@mui/material/Grid';
import SearchCard from '../../components/search_components/SearchCard';
import Paper from '@mui/material/Paper';
import CarList from '../../components/search_components/CarList';
/*
        <NextLink href="/" passHref >
          <Button>Go Back</Button>
          </NextLink> */
export default function Cars() {

  const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          flexGrow: 1,
          height: '80%',
          width: '100%',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          CARS and CARS
        </Typography>
        <Box sx={{ flexGrow: 1,
          my: 4 }}>
          <Grid container spacing={2}
          
          justifyContent="center">
            <Grid item xs="auto" >
              <SearchCard/>
            </Grid>
            <Grid item xs >
              <CarList/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}