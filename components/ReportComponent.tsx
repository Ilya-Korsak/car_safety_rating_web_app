import * as React from 'react';
import { Card, Divider, Typography, Box, Container } from '@mui/material';
import Image from 'next/image';
import { SafetyReportChunk } from '../interfaces';
import ReactPlayer from 'react-player/file'
import Link from 'next/link';



const ReportComponent: React.FC<SafetyReportChunk> = (safetyReportChunk) => {
  return (
    <Card variant="outlined" sx={{ margin: 2 }} >
      <Box
        padding={2}
      >
        <Typography variant="h6" component="h1" >
          {safetyReportChunk.mainLabel}
        </Typography>
      </Box>
      <Box
        display='flex'
        flexDirection='row'
      >
        {safetyReportChunk.picUrl ? <Image
          alt="No image" src={safetyReportChunk.picUrl!} width={300}
          height={150}
          style={{
            objectFit: "contain",
            margin: 20
          }} /> : <></>}
        <Container>
          {safetyReportChunk.secLabel ? <Typography>{safetyReportChunk.secLabel}</Typography> : ""}
          {safetyReportChunk.thrdLabel ? <Typography>{safetyReportChunk.thrdLabel}</Typography> : ""}
        </Container>
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
          Video link: {safetyReportChunk.vidUrl ? <a href={safetyReportChunk.vidUrl}>{safetyReportChunk.vidUrl}</a> : <Typography>no video</Typography>}
        </Typography>
      </Card>
    </Card>
  );
}
export default ReportComponent;