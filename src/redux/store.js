// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice'; // 리덕스 리듀서 import

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;