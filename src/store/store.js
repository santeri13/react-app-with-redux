import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../reducers/dataReducer'; // Import your reducer

const store = configureStore({
  reducer: {
    data: dataReducer, // Add your reducer here
  },
});

export default store;