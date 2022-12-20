import * as React from 'react';
import { List, Divider, Box, Typography } from '@mui/material';
import CarCard from '../CarCard';
import Image from 'next/image';
import { useSelector, useDispatch } from "react-redux";
import { selectVehicleRatings, selectMake, selectModel, selectYear } from '../../redux/slices/filterSlice';
import { Container } from '@mui/system';
import SearchListPlaceholder from './SearchListPlaceholder';
import RecallsList from './RecallsList';
import { FilterQuery } from '../../interfaces';
import ComplaintsList from './ComplaintsList';

const SearchCard: React.FC<FilterQuery> = (filterQuery) => {
        const readyForData: boolean = (
                filterQuery.year.length > 0 &&
                filterQuery.make.length > 0 &&
                filterQuery.model.length > 0
        );

        if (readyForData) {
                return (
                        <Container>
                                <Typography>Avaiable recalls:</Typography>
                                <RecallsList {...filterQuery} />
                                <Typography>Users complaints:</Typography>
                                <ComplaintsList {...filterQuery}/>
                        </Container>)
        }
        else {
                return <SearchListPlaceholder />
        }
}

export default SearchCard;