import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import CarCard from '../CarCard';

export default function AlignItemsList() {
        return (
                <Box overflow={'auto'} minWidth={350} maxWidth={800}>
                        <List>
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                                <Divider variant="inset" component="li" />
                                <CarCard />
                        </List>
                </Box>
        );
}