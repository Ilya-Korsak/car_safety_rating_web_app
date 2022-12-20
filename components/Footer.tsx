import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { FacebookIcon, RedditIcon, TelegramIcon } from 'next-share';
import Divider from '@mui/material/Divider';


export default function SimpleFooter() {
  return (
    <Box
      component="footer"
      display="flex"
      flexDirection="row"
      bgcolor={(theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800]}
      py={3}
      px={2}
      mt='auto'
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          CarSafetyRating - free test project 2022
        </Typography>
      </Container>
      <FacebookIcon size={32}/>
      <RedditIcon size={32}/>
      <TelegramIcon size={32}/>
    </Box>
  );
}