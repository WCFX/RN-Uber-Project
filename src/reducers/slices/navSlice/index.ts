import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavSliceState {
  origin: string | null;
  destination: string | null;
  travelTimeInformation: string | null;
  action: string;
}

const initialState: NavSliceState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
  action: '',
};

const navSlice = createSlice({
  name: 'navSlice',
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<NavSliceState>) => {
      state.origin = action.payload.origin;
      state.action = 'origin';
    },
    setDestination: (state, action: PayloadAction<NavSliceState>) => {
      state.destination = action.payload.destination;
      state.action = 'destination';
    },
    setTravelTimeInformation: (state, action: PayloadAction<NavSliceState>) => {
      state.travelTimeInformation = action.payload.travelTimeInformation;
      state.action = 'travelTimeInformation';
    },
    resetNav: state => {
      state.origin = null;
      state.destination = null;
      state.travelTimeInformation = null;
      state.action = '';
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation, resetNav } =
  navSlice.actions;

export const selectOrigin = (state: NavSliceState) => state.origin;
export const selectDestination = (state: NavSliceState) => state.destination;
export const selectTravelTimeInformation = (state: NavSliceState) =>
  state.travelTimeInformation;
export const selectAction = (state: NavSliceState) => state.action;

export default navSlice.reducer;
