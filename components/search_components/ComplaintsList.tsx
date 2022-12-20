import * as React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, List } from '@mui/material';
import ItemSelector from './PropsSelector';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { selectMakes, selectModels, selectYears } from "../../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { ComplaintMessage, FilterQuery, RecallMessage, YearOption } from '../../interfaces';
import useSwr from 'swr'
import RecallCard from '../RecallCard';
import ComplaintCard from '../ComplaintCard';


  const fetcher = (url: string) => fetch(url).then((res) => res.json().then(item => item?.text))
  
  const SearchCard: React.FC<FilterQuery> = ({make, model, year}) => {

    const { data, error } = useSwr<ComplaintMessage[]>(`/api/complaints/getVehicle?make=${make}&model=${model}&year=${year}`, fetcher);
    if(error){
        return <div>Error</div>
    }
    if(!data){
        return <div>Loading</div>
    }
    else{
        return (
            <List>
                {data?.map((complaintMessage)=><ComplaintCard key={complaintMessage.odiNumber+complaintMessage.dateOfIncident} {...complaintMessage}/>)}
            </List>
        )
    }
  }

  export default SearchCard;