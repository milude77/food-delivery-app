import React, { Suspense, useState } from 'react';
import RestaurantList from '../components/RestaurantList';
import Cart from '../components/Cart';
import ProfileDrawer from '../components/ProfileDrawer';
import FunctionalMenu from '../components/FunctionMenu';
import ProductItem from '../components/ProductItem';
import Loding from '../components/Loding';
import '../css/Home.css'


const Home = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('全部');
  const [selectedStore, setSelectedStore] = useState(null);
  const [restaurantListOpen, setRestaurantListOpen] = useState(true);


  const toLogin = () => {
    window.location.href = '/login';
  }

  return (
    <div className='home-container' style={{ display: 'flex' }}>
      <div className={'menu-container'} style={{ width: '10%', height: '100vh'}}>
        <FunctionalMenu onSelect={(cuisine) => setSelectedCuisine(cuisine)} />
      </div>
      <div className="toggle-btn" onClick={() => {restaurantListOpen ? setRestaurantListOpen(false) : setRestaurantListOpen(true)}}>
          {restaurantListOpen ?'<':'>'}
      </div>
      <div className={`restaurant-list ${restaurantListOpen ? 'open' : 'close'}`}>
        <RestaurantList 
          selectedCuisine={selectedCuisine} 
          onSelect={(store) => setSelectedStore(store)} 
          open={restaurantListOpen} 
          />
      </div>
      <div className={`product-container ${restaurantListOpen ? '' : 'show'}`}>
        <ProductItem
          selectedStore={selectedStore}
          style={{ width: '100%', height: '100vh' }}
        />
      </div>
      <div style={{ maxWidth: '100%', height: '100vh'}}>
        <Cart />
      </div>
      <div style={{ paddingLeft:0}}>
        <ProfileDrawer />
      </div>
      <button className='login-btn' onClick={() => toLogin()}>Login</button>
    </div>
  );
};

export default Home;