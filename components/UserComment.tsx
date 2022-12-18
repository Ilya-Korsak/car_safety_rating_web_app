import * as React from 'react';
import { Card, Divider, Typography, Box } from '@mui/material';

export default function UserCommentCard() {
  return (
    <Card variant="outlined" sx={{margin: 2}} >
      <Box
        padding={2}
      >
        <Typography variant="h6" component="h1" >
          Yosemite National Park
        </Typography>
        <Typography >
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
          California
        </Typography>
      </Box>
        <Divider />
      <Card
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          bgcolor: 'background.level1',
          paddingX: 2
        }}
      >
        <Typography>
          6.3k views
        </Typography>
        <Divider orientation="vertical" />
        <Typography sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          1 hour ago
        </Typography>
      </Card>
    </Card>
  );
}