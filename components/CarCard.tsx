import * as React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { Button, Grid, Paper, Typography, ButtonBase } from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

type CarInfoCardProps = {
  make: string,
  model: string,
  id: string,
  modification: string,
  children: React.ReactNode
};

const CarInfoCard: React.FC<CarInfoCardProps> = ({ make, id, children, model, modification }) => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 2,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            {children}
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {make}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {modification}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {id}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {model}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default CarInfoCard;