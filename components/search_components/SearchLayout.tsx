import type { FC, ReactElement } from 'react'
import { Container, Typography, Box, Grid } from '@mui/material';
import SearchCard from './SearchCard';
import { FilterActions } from '../../interfaces';

type SearchLayoutProps = {
  name: String,
  children: React.ReactNode,
  filterActions: FilterActions
};
//PROPERTY DRILL - HELL YEAH!!!!
const SearchLayout: FC<SearchLayoutProps> = ({ children, name, filterActions }) => {
  return (
    <Container maxWidth="lg">
      <Box my={4} flexGrow={1} width='100%'>
        <Typography variant="h4" component="h1" gutterBottom>
          {name}
        </Typography>
        <Box flexGrow = {1} my = {4}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs="auto" >
              <SearchCard filterActions={filterActions}/>
            </Grid>
            <Grid item xs >
              {children}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
export default SearchLayout;