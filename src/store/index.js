import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import swapiReducer from './slices/swapi'

export default configureStore({
  reducer: {
    swapiStore: swapiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})
