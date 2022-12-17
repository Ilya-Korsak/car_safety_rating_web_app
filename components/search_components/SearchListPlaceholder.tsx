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
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function AlignItemsList() { 
    const matches = useMediaQuery('(min-width:778px)');
  
    return (
        <Box 
            height='100%'
            display='flex'
            flexDirection={'column'}
            justifyContent='center'
            alignItems={matches?'start':'center'}>
            <Box 
                width={350}
                display='flex'
                flexDirection={matches?'row':'column'}
                alignItems={matches?'start':'center'}>
                <Image
                    style={{
                        transform: 'rotate(-0.40turn)'
                    }}
                    alt='For vehicle search'
                    width={150}
                    height={150}
                    placeholder="blur"
                    blurDataURL='/images/arrow.png'
                    src={'/images/arrow.png'} />
                <Image
                    alt=' use this box!'
                    width={150}
                    height={150}
                    src={'/images/car.png'} />
            </Box>
            <Box bgcolor='yellow' display='flex' justifyContent='center'>
                <Typography>
                    Use the filter to find the car!
                </Typography>
            </Box>
        </Box>
    );
}