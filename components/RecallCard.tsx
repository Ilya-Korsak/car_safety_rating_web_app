import * as React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { Button, Grid, Paper, Typography, ButtonBase, Divider } from '@mui/material';
import { RecallMessage } from '../interfaces';

const CarInfoCard: React.FC<RecallMessage> = (recallMessage) => {
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
                {recallMessage.Component}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {recallMessage.Remedy}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Summary: {recallMessage.Summary}
              </Typography>
              <Divider style={{margin: 5}}/>
              <Typography variant="body2" color="text.secondary">
                Campagin number: {recallMessage.NHTSACampaignNumber}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Report date: {recallMessage.ReportReceivedDate}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {recallMessage.ModelYear}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default CarInfoCard;