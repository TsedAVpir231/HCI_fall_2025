import React, { Component } from 'react';
import { appData } from '../../data';

export default class Rent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      totalItems: appData.rent.items.length
    };
  }

  goPrev = () => {
    this.setState(prev => ({
      currentIndex: prev.currentIndex <= 0 ? prev.totalItems - 1 : prev.currentIndex - 1
    }));
  };

  goNext = () => {
    this.setState(prev => ({
      currentIndex: prev.currentIndex >= prev.totalItems - 1 ? 0 : prev.currentIndex + 1
    }));
  };

  render() {
    const { currentIndex } = this.state;
    const item = appData.rent.items[currentIndex];

    return (
      <section className="rent" id="rent">
        <h2 className="section-title">
          <span className="title-decor"></span>
          <span className="title-text" data-i18n="rent.title">Аренда оборудования</span>
        </h2>

        <div className="rent_body">
          <p className="rent_body-text" data-i18n="rent.text">{appData.rent.description}</p>

          <div className="rent_slider">
            <div className="rent_slider-box">
              <h4 className="rent_box-title" data-i18n="rent.slider.title">Новое оборудование, предоставляемое в аренду:</h4>

              <div className="slider-controls">
                <button className="slider-prev" type="button" onClick={this.goPrev} aria-label="Предыдущий"></button>
                <button className="slider-next" type="button" onClick={this.goNext} aria-label="Следующий"></button>
              </div>

              <div className="rent_box--body">
                <div className="rent_box-image">
                  <picture><img src={item.imageLight}  alt={item.title} className="rent_image"/></picture>
                </div>

                <div className="rent_box-content">
                  <h4 className="rent_content-title" data-i18n="rent.slider.item.title">
                    {item.title}
                  </h4>
                  <ul className="rent_content-list">
                    {item.features.map((feature, idx) => (<li key={idx} className="rent_list-item" data-i18n={`rent.slider.item${idx + 1}`}>{feature} </li>))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}