import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import fetchVehiclesService from '../../services/fetchVehicles'

const fetchVehiclesCb = async (_, { rejectWithValue }) => {
  try {
    let resultsArr = []
    let response = await fetchVehiclesService()
    resultsArr = resultsArr.concat(response.results)
    while (response.next) {
      // eslint-disable-next-line
      response = await fetchVehiclesService(response.next)
      resultsArr = resultsArr.concat(response.results)
    }

    return { results: resultsArr }
  } catch (e) {
    // eslint-disable-next-line
    console.log(e, 'error') // TODO : to create error handler
    return rejectWithValue('not found')
  }
}
export const fetchVehicles = createAsyncThunk('fetchVehicles', fetchVehiclesCb)

export const swapiSlice = createSlice({
  name: 'swapiStore',
  initialState: {
    vehicles: '',
    isLoading: false,
    apiError: '',
  },
  reducers: {
    resetSwapiStore: (state) => {
      state.apiError = ''
      // state.convertedList = "";
    },
  },
  extraReducers: {
    [fetchVehicles.pending]: (state) => {
      state.apiError = ''
      state.isLoading = true
    },
    [fetchVehicles.fulfilled]: (state, action) => {
      state.isLoading = false
      state.vehicles = action.payload
    },
    [fetchVehicles.rejected]: (state, action) => {
      state.isLoading = false
      state.apiError = action.payload
    },
  },
})

export const selectVehicles = (store) => store.swapiStore.vehicles
export const selectIsLoading = (store) => store.swapiStore.isLoading
export const selectApiError = (store) => store.swapiStore.apiError

export const swapiActions = swapiSlice.actions

export default swapiSlice.reducer
