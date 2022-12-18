import CarList from '../../components/search_components/CarList';
import SearchLayout from '../../components/search_components/SearchLayout';

export default function CarsListPage() {
  return (
    <SearchLayout name='Safety rating search'>
      {
        <CarList />//<SearchListPlaceholder />
      }
    </SearchLayout>
  );
}