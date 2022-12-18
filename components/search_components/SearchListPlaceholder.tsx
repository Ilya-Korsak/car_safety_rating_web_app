import * as React from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';
import Image from 'next/image';

//Reserved for future
type PlaceholderProps = {
    iamgeUrl: String,
};

export default function SearchListPlaceholder() {
    const matches = useMediaQuery('(min-width:778px)');
    return (
        <Box
            height='100%'
            display='flex'
            flexDirection={'column'}
            justifyContent='center'
            alignItems={matches ? 'start' : 'center'}>
            <Box
                width={350}
                display='flex'
                flexDirection={matches ? 'row' : 'column'}
                alignItems={matches ? 'start' : 'center'}>
                <Image
                    style={{
                        transform: `${matches ? 'rotate(-0.40turn)' : 'rotate(-0.08turn)'}`
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
            <Box display='flex' justifyContent='center'>
                <Typography>
                    Use the filter to find the car!
                </Typography>
            </Box>
        </Box>
    );
}