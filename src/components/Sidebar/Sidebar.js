import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const sidebarItems = [
    {
      name: 'Home',
      img: require('../../assets/images/home.png'),
      path: '/',
    },
    {
      name: 'Markets',
      img: require('../../assets/images/markets.png'),
      path: '/markets',
    },
    {
      name: 'Holdings',
      img: require('../../assets/images/holdings.png'),
      path: '/holdings',
    },
    {
      name: 'Wallet',
      img: require('../../assets/images/wallet.png'),
      path: '/wallet',
    },
    {
      name: 'Alert',
      img: require('../../assets/images/alerts.png'),
      path: '/alert',
    },
    {
      name: 'Apps',
      img: require('../../assets/images/apps.png'),
      path: '/apps',
    },
  ];

  return (
    <div className="sidebar-container"> 
      <div className="user-profile"></div>
      <div className="item-list">
        {sidebarItems.map((item, index) => (
          <div key={index} >
            <Link to={item.path} className="menu-item">
              <img src={item.img} alt={`${item.name} Logo`} />
              <span className="item-name">{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
