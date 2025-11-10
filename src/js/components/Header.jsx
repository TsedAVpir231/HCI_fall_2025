import React, { Component } from 'react';
import { appData } from '../../data';
import eventBus from '../core/EventBus';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerOpen: false,
      theme: localStorage.getItem('theme') || 'light'
    };
  }

  componentDidMount() {
    eventBus.on('themeChanged', (newTheme) => {
      this.setState({ theme: newTheme });
    });
  }

  componentWillUnmount() {
    eventBus.off('themeChanged');
  }

  toggleBurger = () => {
    this.setState(prev => ({ burgerOpen: !prev.burgerOpen }));
  };

  toggleTheme = () => {
    eventBus.emit('toggleTheme');
  };

  openModal = () => {
    document.getElementById('profileModal').style.display = 'block';
  };

  render() {
    const { burgerOpen, theme } = this.state;

    return (
      <header>
        <div className="header_logo">
          <picture><img className="header_logo--img" src={appData.organization.logo} alt="TransLight logo" /></picture>
          <p className="header_logo--text" dangerouslySetInnerHTML={{ __html: 'TransLight' }} />
        </div>

        <div className={`header_burger ${burgerOpen ? 'active' : ''}`} onClick={this.toggleBurger}><span></span></div>

        <div className={`header_menu ${burgerOpen ? 'active' : ''}`}>
          <ul className="menu_list">
            <li><a className="menu_link menu_link--home" href="/index.html" data-navigate>О компании</a></li>
            <li><a className="menu_link menu_link--portfolio" href="/index.html#projects" data-navigate>Портфолио</a></li>
            <li><a className="menu_link menu_link--catalog" href="/catalog.html" data-navigate>Каталог</a></li>
            <li><a className="menu_link menu_link--service" href="/index.html#rent" data-navigate>Сервис</a></li>
            <li><a className="menu_link menu_link--contact" href="/index.html#contact" data-navigate>Контакты</a></li>
          </ul>
        </div>

        <div className="header_icons">
          <div className="header_icon header_icon--language">
            <button id="lang-en" className="lang-btn">EN</button>
            <button id="lang-ru" className="lang-btn active">RU</button>
          </div>

          <div className="header_icon header_icon--theme" id="theme-toggle" onClick={this.toggleTheme}>
            <svg className={`icon light-icon ${theme === 'dark' ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="var(--color-light)">
              <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"></path>
            </svg>
            <svg className={`icon dark-icon ${theme === 'light' ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="var(--color-light)">
              <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"></path>
            </svg>
          </div>

          <div className="header_icon header_icon--auth" onClick={this.openModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="var(--color-light)"/>
            </svg>
          </div>

          <a className="header_icon header_icon--favorites" href="/favorites.html" aria-label="Избранное">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z" fill="var(--color-light)"/>
            </svg>
          </a>

          <a className="header_icon header_icon--cart" href="/cart.html" aria-label="Корзина">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18C5.9 18 5 18.9 5 20C5 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM6.17 15H18.83C19.37 15 19.83 14.54 19.83 14C19.83 13.92 19.82 13.84 19.81 13.76L18.29 6.92C18.13 6.34 17.61 6 17 6H7C6.39 6 5.87 6.34 5.71 6.92L4.19 13.76C4.18 13.84 4.17 13.92 4.17 14C4.17 14.54 4.63 15 5.17 15H6.17ZM6 4H18C19.1 4 20 4.9 20 6C20 6.08 19.99 6.16 19.98 6.24L18.24 14.49C18.09 15.28 17.36 15.88 16.55 15.98H7.45C6.64 15.88 5.91 15.28 5.76 14.49L4.02 6.24C4.01 6.16 4 6.08 4 6C4 4.9 4.9 4 6 4Z" fill="var(--color-light)" />
            </svg>
          </a>
        </div>
      </header>
    );
  }
}