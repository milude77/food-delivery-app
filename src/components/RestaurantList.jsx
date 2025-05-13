import { useSelector, useDispatch } from 'react-redux';
import { filterByCuisine, selectRestaurant } from '../features/restaurantSlice';
import FoodItem from './FoodItem';

const RestaurantList = () => {
  const { restaurants, filteredRestaurants, selectedRestaurant } = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();
  const displayRestaurants = filteredRestaurants.length > 0 ? filteredRestaurants : restaurants;

  // 模拟商家的菜品数据
  const mockFoods = [
    { id: 1, name: '北京烤鸭', price: 98, description: '传统京味烤鸭', restaurantId: 1 },
    { id: 2, name: '宫保鸡丁', price: 38, description: '经典川菜', restaurantId: 1 },
    { id: 3, name: '意大利面', price: 48, description: '番茄肉酱意面', restaurantId: 2 },
    { id: 4, name: '提拉米苏', price: 28, description: '意式甜点', restaurantId: 2 },
  ];

  return (
    <div>
      <h2>商家列表</h2>
      <button onClick={() => dispatch(filterByCuisine('Chinese'))}>中餐</button>
      <button onClick={() => dispatch(filterByCuisine('Italian'))}>意餐</button>

      {/* 商家列表 */}
      {displayRestaurants.map((restaurant) => (
        <div 
          key={restaurant.id} 
          onClick={() => dispatch(selectRestaurant(restaurant))}
          style={{ 
            margin: '10px', 
            cursor: 'pointer',
            backgroundColor: selectedRestaurant?.id === restaurant.id ? '#f0f0f0' : 'transparent' 
          }}
        >
          <h3>{restaurant.name}</h3>
          <p>菜系: {restaurant.cuisine}</p>
        </div>
      ))}

      {/* 选中商家的菜品列表 */}
      {selectedRestaurant && (
        <div style={{ marginTop: '20px' }}>
          <h3>{selectedRestaurant.name} 的菜品</h3>
          {mockFoods
            .filter((food) => food.restaurantId === selectedRestaurant.id)
            .map((food) => (
              <FoodItem key={food.id} food={food} />
            ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;