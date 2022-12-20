import CarList from '../../components/search_components/CarList';
import SearchLayout from '../../components/search_components/SearchLayout';
import { useSelector } from "react-redux";
import { setYear, fetchMakesByYear, setModel, setMake, selectYear, selectMake, fetchModelsByMake, fetchModsByModel } from "../../redux/slices/filterSlice";
import { YearOption, RequestType, FilterActions, FilterQuery } from '../../interfaces'
import useSwr from 'swr'
import { useAppDispatch } from '../../redux/hooks';

const fetcher = (url: string) => fetch(url).then((res) => res.json().then(item => item?.text))

export default function CarsListPage() {
  const dispatch = useAppDispatch();
  const selectedMake = useSelector(selectMake);
  const selectedYear = useSelector(selectYear);
  const requestType = RequestType.RATINGS
  //wanna use SWR but will leave this job for redux
  //const { data, error } = useSwr<YearOption[]>(`/api/${requestType}/getYears`, fetcher);
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
      const filterQuery: FilterQuery = {
        mode: requestType,
        year: selectedYear,
        make:  selectedMake,
        model: model
      };
      dispatch(fetchModsByModel(filterQuery));
    }
  };

  return (
    <SearchLayout name='Safety rating search' filterActions={filterActions}>
      {
        <CarList />
      }
    </SearchLayout>
  );
}