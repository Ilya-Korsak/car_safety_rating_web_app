import { Container, Typography, Box, Button } from '@mui/material';
import Link from '../../components/from_template/Link';
import ProTip from '../../components/from_template/ProTip';
import Copyright from '../../components/from_template/Copyright';

export default function ComparePage() {
  return (
    <Container maxWidth="lg">
      <Box
        my={4}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
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