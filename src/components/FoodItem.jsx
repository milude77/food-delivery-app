import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

const FoodItem = ({ food }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '10px', 
      margin: '10px', 
      borderRadius: '5px' 
    }}>
      <h3>{food.name}</h3>
      <p>价格: ¥{food.price}</p>
      <p>描述: {food.description || '暂无描述'}</p>
      <button 
        onClick={() => dispatch(addItem(food))}
        style={{ 
          backgroundColor: '#ff5a5f', 
          color: 'white', 
          border: 'none', 
          padding: '5px 10px', 
          cursor: 'pointer' 
        }}
      >
        加入购物车
      </button>
    </div>
  );
};

export default FoodItem;