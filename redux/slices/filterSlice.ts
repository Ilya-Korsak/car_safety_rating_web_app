import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { YearOption } from '../../interfaces'

export interface FilterState {
    year: string,
    make: string,
    model: string,
//---
    years: Array<string>,
    makes: Array<string>,
    models: Array<string>,
}

const initialState: FilterState = {
  year: "",
  make: "",
  model: "",
  models: [],
  years: [],
  makes: [],
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<string>) => {
      state.year= action.payload
    },
    setMake: (state, action: PayloadAction<string>) => {
      state.make= action.payload
    },
    setModel: (state, action: PayloadAction<string>) => {
      state.model= action.payload
    },
    //---
    setYears: (state, action: PayloadAction<YearOption[]>) => {
        state.years= action.payload?.map(({ModelYear})=>ModelYear);
      },
  },
})

// Action creators are generated for each case reducer function
export const { setYear, setModel, setMake, setYears } = filterSlice.actions

export const selectYear = (state: RootState) => state.filter.year;
export const selectModel = (state: RootState) => state.filter.year;
export const selectMake = (state: RootState) => state.filter.year;
//--
export const selectYears = (state: RootState) => state.filter.years;

export default filterSlice.reducer