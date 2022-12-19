import CarList from '../../components/search_components/CarList';
import SearchLayout from '../../components/search_components/SearchLayout';
import { useSelector, useDispatch } from "react-redux";
import { setMake, setModel, setYears } from "../../redux/slices/filterSlice";
import { selectYear, selectMake, selectModel } from "../../redux/slices/filterSlice";
import type { YearOption } from '../../interfaces'
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json().then(item=>item?.text))

export default function CarsListPage() {
  const dispatch = useDispatch();
  const {data, error} = useSwr<YearOption[]>('/api/ratings/getYears', fetcher);
  
  if(error){
    console.log(error);
  }
  if(!data){
    console.log("loading");
  }
  else{
    console.log("ready");
    console.log(data);
    dispatch(setYears(data));
  }
  return (
    <SearchLayout name='Safety rating search' >
      {
        <CarList />//<SearchListPlaceholder />
      }
    </SearchLayout>
  );
}