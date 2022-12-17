import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import YearSelector from './PropsSelector';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
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