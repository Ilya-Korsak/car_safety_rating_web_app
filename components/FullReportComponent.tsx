import * as React from 'react';
import { Card, Divider, Typography, Box, Container } from '@mui/material';
import { SafetyRankReport, SafetyReportChunk } from '../interfaces';
import Image from 'next/image';
import Link from 'next/link';
import ReportComponent from './ReportComponent';



const FullReportComponent: React.FC<SafetyRankReport> = (safetyRankReport) => {
  return (
    <Card variant="outlined" sx={{ margin: 2 }} >
      <Box
        padding={2}
      >
        <Box
          display='flex'
          flexDirection='row'

        >
          {safetyRankReport.VehiclePicture ?
            <Image
              width={250}
              height={250}
              style={{
                objectFit: "contain",
                marginRight: 20
              }}
              src={safetyRankReport.VehiclePicture!}
              alt="VehiclePicture"
            /> : <></>
          }
          <Container>
            <Typography variant="h6" component="h1" >
              {safetyRankReport.Make} {safetyRankReport.Model}
            </Typography>
            <Typography >
              {safetyRankReport.VehicleDescription}
            </Typography>
            <Divider />
            <Typography variant="h6" component="h1" >
              Overall rating: {safetyRankReport.OverallRating}
            </Typography>
            <Divider />
            <Typography >
              Electronic stability control: {safetyRankReport.NHTSAElectronicStabilityControl}
            </Typography>
            <Typography >
              Forward collision warning: {safetyRankReport.NHTSAForwardCollisionWarning}
            </Typography>
            <Typography >
              Lane departure warning: {safetyRankReport.NHTSALaneDepartureWarning}
            </Typography>
            <Typography >
              Total complaints: {safetyRankReport.ComplaintsCount}
            </Typography>
            <Typography >
              Total recalls: {safetyRankReport.RecallsCount}
            </Typography>
            <Typography sx={{ fontWeight: 'md', color: 'text.secondary' }}>
              More info in <Link href="/recalls/">recalls</Link> section
            </Typography>
          </Container>
        </Box>
        {safetyRankReport.OverallFrontCrashRating ? <ReportComponent key={123}
            mainLabel={`Front crash - overall rating: ${safetyRankReport.OverallFrontCrashRating}`} 
            secLabel={`Driver safety rating: ${safetyRankReport.FrontCrashDriversideRating}`}
            thrdLabel={`Passenger safety rating: ${safetyRankReport.FrontCrashPassengersideRating}`} 
            vidUrl={safetyRankReport.FrontCrashVideo}
            picUrl={safetyRankReport.FrontCrashPicture}
        /> : <></>}
        {safetyRankReport.OverallSideCrashRating ? <ReportComponent key={258} 
            mainLabel={`Side crash - overall rating: ${safetyRankReport.OverallSideCrashRating}`} 
            secLabel={`Driver safety rating: ${safetyRankReport.SideCrashDriversideRating}`}
            thrdLabel={`Passenger safety rating: ${safetyRankReport.SideCrashPassengersideRating}`} 
            vidUrl={safetyRankReport.SideCrashVideo}
            picUrl={safetyRankReport.SideCrashPicture}
        /> : <></>}
        {safetyRankReport.RolloverRating ? <ReportComponent key={456} 
            mainLabel={`Rollover crash - overall rating: ${safetyRankReport.RolloverRating}`} 
            secLabel={`Rollover posibility: ${safetyRankReport.RolloverPossibility}`}
        /> : <></>}
        {safetyRankReport.SidePoleCrashRating ? <ReportComponent key={789}
            mainLabel={`Side pole crash - overall rating: ${safetyRankReport.SidePoleCrashRating}`} 
            vidUrl={safetyRankReport.SidePoleVideo}
            picUrl={safetyRankReport.SidePolePicture}
        /> : <></>}
      </Box>
      <Divider />
    </Card>
  );
}
export default FullReportComponent;