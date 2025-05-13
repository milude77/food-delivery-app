import React from 'react';
import RestaurantList from '../components/RestaurantList';
import Cart from '../components/Cart';
import MapContainer from '../components/MapContainer';

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '40%', padding: '20px' }}>
        <RestaurantList />
        <Cart />
      </div>
      <div style={{ width: '60%' }}>
        <MapContainer />
      </div>
    </div>
  );
};

export default Home;