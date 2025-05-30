//商品页面组组件
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

function ProductItem({ selectedStore }) {

  const productData = {
  1: {
    storeName: "一家堵上厨师生涯的蛋炒饭",
    categories: [
      {
        category: "主食",
        items: [
          { id: 101, name: "蛋炒饭", price: 12.0, image: "rice.jpg" },
          { id: 102, name: "扬州炒饭", price: 14.0, image: "yangzhou.jpg" },
        ],
      },
      {
        category: "饮料",
        items: [
          { id: 103, name: "可乐", price: 3.0, image: "cola.jpg" },
          { id: 104, name: "雪碧", price: 3.0, image: "sprite.jpg" },
        ],
      },
    ],
  },
  2: {
    storeName: "叫了个熏鸡",
    categories: [
      {
        category: "小吃",
        items: [
          { id: 201, name: "熏鸡翅", price: 18.0, image: "wings.jpg" },
          { id: 202, name: "熏鸡腿", price: 20.0, image: "leg.jpg" },
        ],
      },
      {
        category: "饮料",
        items: [
          { id: 203, name: "绿茶", price: 4.0, image: "greentea.jpg" },
          { id: 204, name: "奶茶", price: 6.0, image: "milktea.jpg" },
        ],
      },
    ],
  },
  // 可添加更多店铺数据...
};
const storeData = productData[selectedStore];

  if (!storeData) return <div>请选择一家店铺查看商品</div>;

  return (
    <div>
      {console.log("hello")}
      {!selectedStore && (
        <span>选择店铺后查看菜品</span>
      )}
      <h2>{storeData.storeName}</h2>
      {storeData.categories.map((category) => (
        <div key={category.category}>
          <h3>{category.category}</h3>
          <ul style={{ display: 'flex', gap: '20px' }}>
            {category.items.map((item) => (
              <li key={item.id}>
                <img
                  src={`/assets/products/${item.image}`}
                  alt={item.name}
                  style={{ width: '80px', height: '80px' }}
                />
                <p>{item.name}</p>
                <p>￥{item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default ProductItem;