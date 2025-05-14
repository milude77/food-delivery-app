import React from 'react';
import RestaurantList from '../components/RestaurantList';
import Cart from '../components/Cart';
import FunctionalMenu from '../components/FunctionMenu';


const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '10%', backgroundColor: '#1e90ff', height: '100vh'}}>
        <FunctionalMenu />
      </div>
      <div style={{ width: '40%', padding: '20px' }}>
        <RestaurantList />
        <Cart />
      </div>
    </div>
  );
};

export default Home;