import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Unstable_Grid2 } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Unstable_Grid2 container spacing={2}>
        <Unstable_Grid2 xs={8}>
          <Item>xs=8</Item>
        </Unstable_Grid2>
        <Unstable_Grid2 xs={4}>
          <Item>xs=4</Item>
        </Unstable_Grid2>
        <Unstable_Grid2 xs={4}>
          <Item>xs=4</Item>
        </Unstable_Grid2>
        <Unstable_Grid2 xs={8}>
          <Item>xs=8</Item>
        </Unstable_Grid2>
      </Unstable_Grid2>
    </Box>
  );
}
