import { useSelector, useDispatch } from 'react-redux';
import { filterByCuisine, selectRestaurant } from '../features/restaurantSlice';
import FoodItem from './FoodItem';
import '../css/RestaurantList.css'

const RestaurantList = () => {
  const { restaurants, filteredRestaurants, selectedRestaurant } = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();
  const displayRestaurants = filteredRestaurants.length > 0 ? filteredRestaurants : restaurants;

  // 模拟商家的菜品数据
  const StoreList = [
    { id: 1, name: '一家堵上厨师生涯的蛋炒饭', score:4.5 ,salesvolume:200,distance:2 },
    { id: 2, name: '叫了个熏鸡', score:4.5 ,salesvolume:200,distance:2 },
    { id: 3, name: '海鲜烧烤', score:4.5 ,salesvolume:200,distance:2 },
    { id: 4, name: '过桥米线', score:4.5 ,salesvolume:200,distance:2 },
    { id: 2, name: '叫了个熏鸡', score:4.5 ,salesvolume:200,distance:2 },
    { id: 2, name: '叫了个熏鸡', score:4.5 ,salesvolume:200,distance:2 },
    { id: 2, name: '叫了个熏鸡', score:4.5 ,salesvolume:200,distance:2 },
    { id: 2, name: '叫了个熏鸡', score:4.5 ,salesvolume:200,distance:2 },
  ];

  return (
    <div className="restaurant-list">
      {/* 商家列表 */}
      {StoreList.map((store)=>(
        <div key={store.id} className="store">
          <img src={`/assets/img/${'restaurant'+store.id.toString()}.jpg`} alt={store.name} className='store-icon' />
          <div className="store-details">
            <h4>{store.name}</h4>
            <div style={{display:'flex',alignItems:'center'}}>
              <div className="store-info">
              <p>评分：{store.score}</p>
              <p>销量：{store.salesvolume}</p>
              <p>距离：{store.distance}</p>
            </div>
            <div className='food-display' style={{paddingLeft:'10px'}}>
              <img src={`/assets/img/restaurant2.jpg`} alt={store.name} style={{width:'90px', height:'90px'}} />
              <img src={`/assets/img/restaurant2.jpg`} alt={store.name} style={{width:'90px', height:'90px'}} />
              <img src={`/assets/img/restaurant2.jpg`} alt={store.name} style={{width:'90px', height:'90px'}} />
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;