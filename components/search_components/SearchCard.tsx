import * as React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import ItemSelector from './PropsSelector';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { selectMakes, selectModels, selectYears } from "../../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { FilterActions } from '../../interfaces';

type SearchCardProps = {
  filterActions: FilterActions
};
//PROPERTY DRILL - HELL YEAH!!!!
const SearchCard: React.FC<SearchCardProps> = ({ filterActions }) => {
  const years = useSelector(selectYears);
  const makes = useSelector(selectMakes);
  const models = useSelector(selectModels);
  return (
    <Box
      maxWidth={500}
      minWidth={300}>
      <Card>
        <FormGroup>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Choose a year
            </Typography>
            <ItemSelector data={years} label='Model year' callBack={filterActions.getMakesFromYears}/>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Choose MAKE
            </Typography>
            <ItemSelector data={makes} label='Make' callBack={filterActions.getModelsFromMakes}/>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Choose model
            </Typography>
           <ItemSelector data={models} label='Model' callBack={filterActions.getVehiclesFromModel}/>

             {/*<FormControlLabel control={<Switch />} label="Sucessfull result only" />
            <FormControlLabel control={<Switch />} label="With report only" />
          <FormControlLabel control={<Switch />} label="With coments only" />*/}
          </CardContent>
          {/*<CardActions>
            <Button variant="contained">Search</Button>
          </CardActions>*/}
        </FormGroup>
      </Card>
    </Box>
  );
}
export default SearchCard;