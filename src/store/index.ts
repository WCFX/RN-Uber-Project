import { configureStore } from '@reduxjs/toolkit';

import { NavSliceReducer } from '../reducers';

const store = configureStore({
  reducer: {
    nav: NavSliceReducer,
  },
});

export { store };
