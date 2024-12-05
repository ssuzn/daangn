// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice'; // 리덕스 리듀서 import
import searchReducer from './reducers/searchSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
});

export default store;