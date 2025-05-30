//店铺组件
import React,{ useState } from "react";
import '../css/RestaurantList.css'

const RestaurantList = ({ selectedCuisine, onSelect, open}) => {


  // 模拟商家的菜品数据
  const StoreList = [
    { id: 1, name: '一家堵上厨师生涯的蛋炒饭', score:4.5,salesvolume:200,distance:2,cuisine: '快餐'},
    { id: 2, name: '叫了个熏鸡', score:4.5 ,salesvolume:200,distance:2,cuisine: '快餐'},
    { id: 3, name: '海鲜烧烤', score:4.5 ,salesvolume:200,distance:2,cuisine: '快餐'},
    { id: 4, name: '过桥米线', score:4.5 ,salesvolume:200,distance:2,cuisine: '中餐'},
    { id: 5, name: '叫了个熏鸡', score:4.5 ,salesvolume:200,distance:2,cuisine: '西餐'},
    { id: 6, name: '叫了个熏鸡', score:4.5 ,salesvolume:200,distance:2,cuisine: '快餐'},
    { id: 7, name: '叫了个熏鸡', score:4.5 ,salesvolume:200,distance:2 ,cuisine: '日料'},
    { id: 8, name: '叫了个熏鸡', score:4.5 ,salesvolume:200,distance:2,cuisine: '日料'},
  ];

  const selectedCuisineList = (selectedCuisine) => {
    const fillterde = selectedCuisine === '全部'? StoreList : StoreList.filter(item => item.cuisine === selectedCuisine);
    return fillterde
  }
  return (
    <div className="restaurant-container">
      {/* 商家列表 */}
      {selectedCuisineList(selectedCuisine).map((store)=>(
        <div key={store.id} className={`store`} onClick={()=>{onSelect(store.id)}}>
          <img src={`/assets/img/${'restaurant'+store.id.toString()}.jpg`} alt={store.name} className='store-icon' />
          <div className="store-details">
            <h4>{store.name}</h4>
            <div style={{display:'flex',alignItems:'center'}}>
              <div className="store-info">
              <p>评分：{store.score}</p>
              <p>销量：{store.salesvolume}</p>
              <p>距离：{store.distance}</p>
            </div>
            <div className='food-display' style={{paddingLeft:'10px', display:'flex',justifyContent:'space-between'}}>
              <img src={`/assets/img/restaurant2.jpg`} alt={store.name} style={{ flex: 1, height: 'auto', width: '90px', objectFit: 'cover', margin: '0 5px' }} />
              <img src={`/assets/img/restaurant2.jpg`} alt={store.name} style={{ flex: 1, height: 'auto', width: '90px', objectFit: 'cover', margin: '0 5px' }} />
              <img src={`/assets/img/restaurant2.jpg`} alt={store.name} style={{ flex: 1, height: 'auto', width: '90px', objectFit: 'cover', margin: '0 5px' }} />
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;