import * as React from 'react';
import { List, Divider, Box } from '@mui/material';
import CarCard from '../CarCard';

export default function CarsListComponent() {
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