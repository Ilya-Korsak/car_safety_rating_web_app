import * as React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, List } from '@mui/material';
import ItemSelector from './PropsSelector';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { selectMakes, selectModels, selectYears } from "../../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { FilterQuery, RecallMessage, YearOption } from '../../interfaces';
import useSwr from 'swr'
import RecallCard from '../RecallCard';


  const fetcher = (url: string) => fetch(url).then((res) => res.json().then(item => item?.text))
  
  const SearchCard: React.FC<FilterQuery> = ({make, model, year}) => {

    const { data, error } = useSwr<RecallMessage[]>(`/api/recalls/getVehicle?make=${make}&model=${model}&year=${year}`, fetcher);
    if(error){
        return <div>Error</div>
    }
    if(!data){
        return <div>Loading</div>
    }
    else{
        return (
            <List>
                {data?.map((recallMessage)=><RecallCard {...recallMessage}/>)}
            </List>
        )
    }
  }

  export default SearchCard;