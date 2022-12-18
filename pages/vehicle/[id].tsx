import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Container, Typography, Box, List, Button } from '@mui/material';
import CarCard from '../../components/CarCard';
import UserComment from '../../components/UserComment';
import Link from '../../components/from_template/Link';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function VehicleInfoPage() {
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
          <Button component={Link} noLinkStyle href="/cars" variant="outlined" >{`← Back`}</Button>
          <Typography variant="h4" component="h1" marginX={2}>
            Safety info
          </Typography>
        </Box>
        <CarCard />
        <Box
          margin={2}
          height={400}>
          <DataGrid
            rows={rows}
            columns={columns}
          />
        </Box>
        <Typography variant="h5" component="h1" margin={2}>
          Coments
        </Typography>
        <Box overflow={'auto'} minWidth={350}>
          <List>
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
          </List>
        </Box>
      </Box>
    </Container>
  );
}