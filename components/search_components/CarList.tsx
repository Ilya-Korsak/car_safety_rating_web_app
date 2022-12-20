import * as React from 'react';
import { List, Divider, Box, Typography } from '@mui/material';
import CarCard from '../CarCard';
import Image from 'next/image';
import { useSelector, useDispatch } from "react-redux";
import { selectVehicleRatings, selectMake, selectModel, selectYear } from '../../redux/slices/filterSlice';
import { Container } from '@mui/system';
import SearchListPlaceholder from './SearchListPlaceholder';

export default function CarsListComponent() {

        const selectedVehicleRating = useSelector(selectVehicleRatings);
        const selectedMake = useSelector(selectMake);
        const selectedYear = useSelector(selectYear).toString();
        const selectedModel = useSelector(selectModel);
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.log(selectedMake);
        console.log(selectedYear);
        console.log(selectedModel);
        const readyForImage: boolean = (
                selectedYear.length > 0 &&
                selectedMake.length > 0 &&
                selectedModel.length > 0
        );

        if (readyForImage) {
                const image = <Image style={{ objectFit: "scale-down" }} width={128} height={128} alt="Car preview"//&modelRange=megane
                        src={`https://cdn.imagin.studio/getImage?&customer=lvpersonal-use&make=${selectedMake}&modelFamily=${selectedModel}&modelYear=${selectedYear}&paintId=imagin-grey&angle=01`} />
                return (
                        <Box overflow={'auto'} minWidth={350} maxWidth={800}>
                                <Typography>Avaiable modifications:</Typography>
                                <List>
                                        {[...selectedVehicleRating.map(({ VehicleDescription, VehicleId }) =>
                                                <Container key={VehicleId}>
                                                        <Divider variant="inset" component="li" />
                                                        <CarCard id={VehicleId} make={selectedMake} model={selectedModel} modification={VehicleDescription}>
                                                                {image}
                                                        </CarCard>
                                                </Container>
                                        )
                                        ]}
                                </List>
                        </Box>
                );
        }
        else {
           return <SearchListPlaceholder />
        }
}