//购物车组件

import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../features/cartSlice';

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>购物车</h2>
      {items.length === 0 ? (
        <p>购物车为空</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>
                {item.name} x {item.quantity} (¥{item.price * item.quantity})
              </span>
              <button onClick={() => dispatch(removeItem(item.id))}>移除</button>
            </div>
          ))}
          <p>总价: ¥{total.toFixed(2)}</p>
          <button onClick={() => dispatch(clearCart())}>清空购物车</button>
        </>
      )}
    </div>
  );
};

export default Cart;