import React, { Component } from 'react';
import { appData } from '../../data';

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="first_screen--rectangle"></div>
        <div className="first_screen--content">
          <h1 className="content_title" dangerouslySetInnerHTML={{ __html: appData.page.title }} />
          <p className="content_subtitle">{appData.page.subtitle}</p>
          <a href="/catalog.html" className="content_btn" data-navigate>Перейти в каталог</a>
        </div>
      </section>
    );
  }
}