import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurants: [
    { id: 1, name: '北京烤鸭', cuisine: 'Chinese', lat: 39.9042, lng: 116.4074 },
    { id: 2, name: '意大利面', cuisine: 'Italian', lat: 39.9142, lng: 116.4174 },
  ],
  filteredRestaurants: [],
  selectedRestaurant: null,
};

export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    filterByCuisine: (state, action) => {
      state.filteredRestaurants = state.restaurants.filter(
        (restaurant) => restaurant.cuisine === action.payload
      );
    },
    selectRestaurant: (state, action) => {
      state.selectedRestaurant = action.payload;
    },
  },
});

export const { filterByCuisine, selectRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;