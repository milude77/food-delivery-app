import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './features/restaurantSlice';
import cartReducer from './features/cartSlice';

export default configureStore({
  reducer: {
    restaurants: restaurantReducer,
    cart: cartReducer,
  },
});