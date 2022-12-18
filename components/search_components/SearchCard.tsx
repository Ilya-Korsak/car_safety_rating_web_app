import * as React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import YearSelector from './PropsSelector';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

export default function SearchCard() {
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
            <YearSelector />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Choose MAKE
            </Typography>
            <YearSelector />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Choose model
            </Typography>
            <YearSelector />

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