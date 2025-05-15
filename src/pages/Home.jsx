import React from 'react';
import RestaurantList from '../components/RestaurantList';
import Cart from '../components/Cart';
import ProfileDrawer from '../components/ProfileDrawer';
import FunctionalMenu from '../components/FunctionMenu';
import '../css/Home.css'


const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className={'menu-container'} style={{ width: '10%', height: '100vh'}}>
        <FunctionalMenu />
      </div>
      <div style={{ width: '35%',height:'100vh '}}>
        <RestaurantList />
      </div>
      <div style={{ paddingLeft:0}}>
        <ProfileDrawer />
      </div>
    </div>
  );
};

export default Home;