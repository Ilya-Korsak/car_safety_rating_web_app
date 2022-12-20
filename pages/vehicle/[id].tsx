import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Container, Typography, Box, List, Button } from '@mui/material';
import CarCard from '../../components/CarCard';
import ReportElement from '../../components/FullReportComponent';
import Link from '../../components/from_template/Link';
import { debug } from 'console';
import { useRouter } from 'next/router';
import { SafetyRankReport } from '../../interfaces';
import useSwr from 'swr';
import FullReportComponent from '../../components/FullReportComponent';

const fetcher = (url: string) => fetch(url).then((res) => res.json().then(item => item?.text))
  
export default function VehicleInfoPage() {
  const router = useRouter();
  const { id } = router.query; 
  const { data, error } = useSwr<SafetyRankReport[]>(`/api/ratings/getVehicle?id=${id}`, fetcher);
  let pageSTatus;
  if(error){
    pageSTatus = <Typography>ERROR!</Typography>
  }else if(!data){
    pageSTatus = <Typography>Loading...</Typography>
  }
  return (
    <Container maxWidth="lg">
      <Box
        my={4}
        flexGrow={1}
        width='100%'
      >
        <Box
          display='flex'
          padding={2}
          flexDirection='row'>
          <Typography variant="h4" component="h1" marginX={2}>
            Safety tests reports: 
          </Typography>
        </Box>
        <List>
          {data?
          data.map((safetyRankReport)=><FullReportComponent key={safetyRankReport.VehicleDescription} {...safetyRankReport}/>):
          pageSTatus}
        </List>
      </Box>
    </Container>
  );
}