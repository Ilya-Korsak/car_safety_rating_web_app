import CarList from '../../components/search_components/CarList';
import SearchLayout from '../../components/search_components/SearchLayout';
import { useSelector, useDispatch } from "react-redux";
import { setYear, fetchMakesByYear, setModel, setMake, selectYear, selectMake, fetchModelsByMake, selectModel } from "../../redux/slices/filterSlice";
import { YearOption, RequestType, FilterActions, FilterQuery } from '../../interfaces'
import useSwr from 'swr'
import { useAppDispatch } from '../../redux/hooks';
import { Box, Container, Divider, List, Typography } from '@mui/material';
import RecallCard from '../../components/RecallCard';
import RecallsComplaintsRoot from '../../components/search_components/RecallsComplaintsRoot';

export default function RecallsListPage() {
  const dispatch = useAppDispatch();
  const selectedMake = useSelector(selectMake);
  const selectedYear = useSelector(selectYear).toString();
  const selectedModel = useSelector(selectModel);
  const requestType = RequestType.RECALLS
  const filterActions: FilterActions = {
    getMakesFromYears: (year: string) => {
      dispatch(setYear(year));
      const filterQuery: FilterQuery = {
        mode: requestType,
        year: year,
        make: "",
        model: "",
      };
      dispatch(fetchMakesByYear(filterQuery));
    },
    getModelsFromMakes: (make: string) => {
      dispatch(setMake(make));
      const filterQuery: FilterQuery = {
        mode: requestType,
        year: selectedYear,
        make: make,
        model: "",
      };
      dispatch(fetchModelsByMake(filterQuery));
    },
    getVehiclesFromModel: (model: string) => {
      dispatch(setModel(model));
    }
  };

  const filterQuery: FilterQuery = {
    mode: requestType,
    year: selectedYear,
    make: selectedMake,
    model: selectedModel,
  };
  return (
    <SearchLayout name='Recalls search' filterActions={filterActions}>
      {
        // <CarList />//<SearchListPlaceholder />
        <Box overflow={'auto'} minWidth={350} maxWidth={800}>
          <Typography>{`${selectedYear} ${selectedMake} ${selectedModel}`}</Typography>
          <RecallsComplaintsRoot {...filterQuery} />
        </Box>
      }
    </SearchLayout>
  );
}