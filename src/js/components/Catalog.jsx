import React, { Component } from 'react';
import { appData } from '../../data';
import eventBus from '../core/EventBus';

export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: localStorage.getItem('theme') || 'light'
    };
  }

  componentDidMount() {
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.applyCurrentTheme = this.applyCurrentTheme.bind(this);

    eventBus.on('themeChanged', this.handleThemeChange);
    this.applyCurrentTheme();
  }

  componentWillUnmount() {
    eventBus.off('themeChanged', this.handleThemeChange);
  }

  handleThemeChange = (theme) => {
    this.setState({ theme }, () => {
      this.applyCurrentTheme();
    });
  };

  applyCurrentTheme = () => {
    const { theme } = this.state;
    document.querySelectorAll('img[data-dark-src]').forEach(img => {
      if (theme === 'dark' && img.dataset.darkSrc) {
        img.src = img.dataset.darkSrc;
      } else if (img.dataset.lightSrc) {
        img.src = img.dataset.lightSrc;
      }
    });
  };

  render() {
    return (
      <section className="catalog" id="catalog">
        <h2 className="section-title">
          <span className="title-decor"></span>
          <span className="title-text" data-i18n="catalog.title">Каталог продукции</span>
        </h2>

        <div className="catalog_btns">
          <a href="/index.html" className="catalog_btn" data-i18n="catalog.btn1">Robe</a>
          <a href="/index.html" className="catalog_btn" data-i18n="catalog.btn2">Compulite</a>
        </div>

        <div className="catalog_boxes">
          {appData.catalog.map((item, index) => (
            <div key={item.id} className="catalog_box">
              <picture><img className="catalog_box-img" src={item.imageLight} data-light-src={item.imageLight} alt={item.title}/></picture>
              <div className="catalog_box-content">
                <h3 className="catalog_box-text" data-i18n={`catalog.box${index + 1}`}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}