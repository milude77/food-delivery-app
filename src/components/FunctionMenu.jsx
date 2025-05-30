//菜单组件
import React, { useState } from 'react';
import '../css/FunctionalMenu.css'; // 样式文件
import { FaChevronRight,FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from '../ThemeContext';


const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <button style={{background: isDarkMode ? '#333' : '#fff'}} onClick={toggleTheme}>
      {isDarkMode ? <FaSun size={24} color="#FFA500" /> : <FaMoon size={24} color="#333" />}
    </button>
  );
};

const FunctionalMenu = ({onSelect}) => {

  // 菜单数据
  const menuData = [
    {
      id: 0,
      title: '全部',
      subItems:[]
    },
    {
      id: 1,
      title: '美食外卖',
      subItems: ['快餐', '中餐', '西餐', '日料']
    },
    {
      id: 2,
      title: '礼物鲜花',
      subItems: ['玫瑰花', '百合花', '康乃馨', '向日葵']
    },
    {
      id: 3,
      title: '药品健康',
      subItems: ['感冒药', '退烧药', '肠胃药', '维生素']
    },
    {
      id: 4,
      title: '水果蔬菜',
      subItems: ['水果', '蔬菜']
    },
    {
      id: 5,
      title: '超市便利',
      subItems: ['日用百货', '超市购物', '便利店']
    }

  ];


  // 控制子菜单展开状态
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  // 切换子菜单显示
  const toggleSubMenu = (menuId) => {
    if (menuId === 0) onSelect('全部')
    setExpandedMenu(expandedMenu === menuId ? null : menuId);
  };

  // 选中菜系
  const handleCuisineSelect = (cuisine) => {
    onSelect(cuisine);
    setSelectedCuisine(selectedCuisine === cuisine ? null : cuisine);
  };



  return (
    <div className="menu-container">
      <ul className="main-menu">
        {menuData.map((menu) => (
          <li key={menu.id} className="menu-item">
            {/* 主菜单项（蓝底白字） */}
            <div 
              onClick={() => toggleSubMenu(menu.id)}
              className={`menu-header ${expandedMenu === menu.id ? 'active':''}`}
            >
              <span>{menu.title}</span>
              <span className={`arrow ${expandedMenu === menu.id ? 'expanded':''}`}>
                <FaChevronRight className="arrow-icon"/>
              </span>
            </div>
            
            {/* 子菜单（展开时显示） */}
              <ul className={`sub-menu ${expandedMenu === menu.id ? 'open':'off'}`}>
                {menu.subItems.map((subItem, index) => (
                  <li key={index} className={`sub-item ${selectedCuisine === subItem ? 'active':''}`} onClick={(event) =>{event.stopPropagation();handleCuisineSelect(subItem)}}>
                    {subItem}
                  </li>
                ))}
              </ul>
          </li>
        ))}
      </ul>
      <div className="change-theme-btn">
        <ThemeToggleButton />
      </div>
    </div>

  );
};

export default FunctionalMenu;