import React, { useState, useEffect } from 'react';

const OrderTracking = () => {
  const [status, setStatus] = useState('preparing');

  useEffect(() => {
    const timers = [
      setTimeout(() => setStatus('cooking'), 2000),
      setTimeout(() => setStatus('delivering'), 5000),
      setTimeout(() => setStatus('delivered'), 8000),
    ];
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>订单状态: {status}</h2>
      {status === 'preparing' && <p>商家正在备餐...</p>}
      {status === 'cooking' && <p>厨师正在烹饪中🔥</p>}
      {status === 'delivering' && <p>骑手正在路上 🛵</p>}
      {status === 'delivered' && <p>已送达！请享用 🎉</p>}
    </div>
  );
};

export default OrderTracking;