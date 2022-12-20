import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'; 

import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { FilterQuery, RequestType, MakeOption, YearOption, ModelOption, YearsResponse, VehicleRatingID } from '../../interfaces'
import { useAppDispatch } from '../hooks';

export interface FilterState {
    year: string,
    make: string,
    model: string,
    loading: boolean,
    mode: RequestType,
    years: Array<string>,
    makes: Array<string>,
    models: Array<string>,
    vehicleRatings: Array<VehicleRatingID>
}

const initialState: FilterState = {
  year: "",
  make: "",
  model: "",
  loading: false,
  mode: RequestType.RECALLS,
  models: [],
  years: [],
  makes: [],
  vehicleRatings: []
}

const fetcher = (url: string) => fetch(url).then((res) => res.json().then(item=>item?.text))


export const fetchYears = createAsyncThunk(
  'filter/fetchYears',
  async (filterQuery: FilterQuery, thunkAPI) => {
    const mode: RequestType = filterQuery.mode;
    const data: YearOption[] = await fetcher(`/api/${mode}/getYears/`);
    const result:  YearsResponse ={
      data,
      mode
    }
    return result;
  }
);
export const fetchMakesByYear = createAsyncThunk(
  'filter/fetchMakesByYear',
  async (filterQuery: FilterQuery, thunkAPI) => {
    const data: MakeOption[] = await fetcher(`/api/${filterQuery.mode}/getMakers?year=${filterQuery.year}`)
    return data;
  }
);
export const fetchModelsByMake = createAsyncThunk(
  'filter/fetchModelsByMake',
  async (filterQuery: FilterQuery, thunkAPI) => {
    const data: ModelOption[] = await fetcher(`/api/${filterQuery.mode}/getModels?year=${filterQuery.year}&make=${filterQuery.make}`)
    return data;
  }
);
export const fetchModsByModel = createAsyncThunk(
  'filter/fetchModsByModel',
  async (filterQuery: FilterQuery, thunkAPI) => {
    const data: VehicleRatingID[] = await fetcher(`/api/${filterQuery.mode}/getModification?year=${filterQuery.year}&make=${filterQuery.make}&model=${filterQuery.model}`)
    return data;
  }
);


export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
      state.model = "";
      state.make = "";
      state.models =  [];
      state.makes = [];
      state.vehicleRatings = [];
    },
    setMake: (state, action: PayloadAction<string>) => {
      state.make= action.payload
      state.model = "";
      state.models = [];
      state.vehicleRatings = [];
    },
    setModel: (state, action: PayloadAction<string>) => {
      state.model= action.payload
    },
    resetState: (state) => {
      state = initialState;
    },
    //---
    /*setMode: (state, action: PayloadAction<RequestType>) => {
      state = initialState;
      state.mode = action.payload;
    },*/
    //---
    /*setYears: (state, action: PayloadAction<YearOption[]>) => {
      state.years= action.payload?.map(({ModelYear})=>ModelYear);
    },*/
  /*  setMakers: (state, action: PayloadAction<MakeOption[]>) => {
        state.years= action.payload?.map(({Make})=>Make);
      },*/
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchYears.pending, (state) => {
      // Add user to the state array
      state = initialState;
    })
    builder.addCase(fetchYears.fulfilled, (state, action: PayloadAction<YearsResponse>) => {
      // Add user to the state array
      const {data, mode} = action.payload;
      state.mode = mode;
      state.years = data?.map(({ModelYear})=>ModelYear);
    })
    builder.addCase(fetchMakesByYear.fulfilled, (state, action: PayloadAction<MakeOption[]>) => {
      // Add user to the state array
      state.makes = action.payload?.map(({Make})=>Make);
    })
    builder.addCase(fetchModelsByMake.fulfilled, (state, action: PayloadAction<ModelOption[]>) => {
      // Add user to the state array
      state.models = action.payload?.map(({Model})=>Model);
    })
    builder.addCase(fetchModsByModel.fulfilled, (state, action: PayloadAction<VehicleRatingID[]>) => {
      // Add user to the state array
      state.vehicleRatings = action.payload;
    })
  },
})

// Action creators are generated for each case reducer function
export const { setYear, setModel, setMake, resetState } = filterSlice.actions;

export const selectYear = (state: RootState) => state.filter.year;
export const selectModel = (state: RootState) => state.filter.model;
export const selectMake = (state: RootState) => state.filter.make;
//--
export const selectMode = (state:RootState) => state.filter.mode;
//--
export const selectYears = (state: RootState) => state.filter.years;
export const selectMakes = (state: RootState) => state.filter.makes;
export const selectModels = (state: RootState) => state.filter.models;
export const selectVehicleRatings= (state: RootState) => state.filter.vehicleRatings;

export default filterSlice.reducer