import * as React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { Button, Grid, Paper, Typography, ButtonBase, Divider } from '@mui/material';
import { ComplaintMessage, RecallMessage } from '../interfaces';

const CarInfoCard: React.FC<ComplaintMessage> = (complaintMessage) => {
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
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {complaintMessage.components}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {complaintMessage.summary}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mileage: {complaintMessage.odiNumber}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Is car crashed: {complaintMessage.crash.toString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Was on fire: {complaintMessage.fire.toString()}
              </Typography>
              <Divider style={{margin: 5}}/>
              <Typography variant="body2" color="text.secondary">
                Incedent date: {complaintMessage.dateOfIncident}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Complaint date: {complaintMessage.dateComplaintFiled}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
                Mileage: {complaintMessage.odiNumber}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default CarInfoCard;