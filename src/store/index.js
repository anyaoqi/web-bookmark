import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './festures/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default store