import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';

export default function YourComponent() {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: "100%",
                flexDirection: 'column'
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom>
                404 - this page doesn't exist
            </Typography>
            <Image
                src="/images/404.png" // Route of the image file
                height={300} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="That's an error"
            />
            <Typography variant="h4" component="h1" gutterBottom>
                It was a wrong way...
            </Typography>
        </Box>
    );
}