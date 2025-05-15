import React, { useState } from 'react';
import '../css/ProfileDrawer.css';

const ProfileDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`profile-drawer ${open ? 'open' : ''}`}>
      {/* 小按钮始终露出 */}
      <div className="drawer-tab" onClick={() => setOpen(!open)}>
        {open ? '<' : '>'}
      </div>

      {/* 个人信息内容 */}
      <div className="drawer-content">
        <h2>个人信息</h2>
        <p>用户名：张三</p>
        <p>邮箱:zhangsan@example.com</p>
        <button onClick={() => setOpen(false)}>关闭</button>
      </div>
    </div>
  );
};

export default ProfileDrawer;
