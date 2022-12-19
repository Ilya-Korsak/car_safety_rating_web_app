import * as React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import ItemSelector from './PropsSelector';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { selectYears } from "../../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function SearchCard() {
  
  const years = useSelector(selectYears);
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
            <ItemSelector data={years} label='Model year'/>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Choose MAKE
            </Typography>
            <ItemSelector data={years} label='Model year'/>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Choose model
            </Typography>
            <ItemSelector data={years} label='Model year'/>

            <FormControlLabel control={<Switch />} label="Sucessfull result only" />
            <FormControlLabel control={<Switch />} label="With report only" />
            <FormControlLabel control={<Switch />} label="With coments only" />
          </CardContent>
          <CardActions>
            <Button variant="contained">Search</Button>
          </CardActions>
        </FormGroup>
      </Card>
    </Box>
  );
}