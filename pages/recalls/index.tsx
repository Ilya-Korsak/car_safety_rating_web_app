import CarList from '../../components/search_components/CarList';
import SearchLayout from '../../components/search_components/SearchLayout';
import { useSelector, useDispatch } from "react-redux";
import { setYear, fetchMakesByYear, setModel, setMake, selectYear, selectMake, fetchModelsByMake } from "../../redux/slices/filterSlice";
import { YearOption, RequestType, FilterActions, FilterQuery } from '../../interfaces'
import useSwr from 'swr'
import { useAppDispatch } from '../../redux/hooks';

const fetcher = (url: string) => fetch(url).then((res) => res.json().then(item => item?.text))

export default function RecallsListPage() {
  const dispatch = useAppDispatch();
  const selectedMake = useSelector(selectMake);
  const selectedYear = useSelector(selectYear);
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
     // dispatch(setModel(model));
     /* const filterQuery: FilterQuery = {
        mode: RequestType.RATINGS,
        year: useSelector(selectYear),
        make:  useSelector(selectMake),
        model: model,
      };*/
    }
  };
  return (
    <SearchLayout name='Recalls search' filterActions={filterActions}>
      {
        <CarList />//<SearchListPlaceholder />
      }
    </SearchLayout>
  );
}