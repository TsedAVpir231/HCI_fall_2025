import React, { Component } from 'react';
import { appData } from '../../data';

export default class News extends Component {
  render() {
    const featured = appData.news.find(n => n.type === 'featured') || appData.news[0];
    const compact = appData.news.filter(n => n.type !== 'featured');

    return (
      <section className="news" id="news">
        <div className="news_header">
          <h2 className="section-title">
            <span className="title-decor"></span>
            <span className="title-text" data-i18n="news.title">Новости</span>
          </h2>
          <a className="news_link" href="/news.html" data-navigate data-i18n="news.link">все новости</a>
        </div>

        <div className="news_boxes">
          <div className="news_box news_box--milos">
            <img  className="news_img" src={featured.imageLight} alt="Milos seminar" data-i18n="[alt]news.milos.alt"/>
            <div className="news_milos-content">
              <div className="news-title news_milos-title" data-i18n="news.milos.title">{featured.title}</div>
              <div className="news-date news_milos-date" data-i18n="news.milos.date">{featured.date}</div>
              <div className="news-text news_milos-text" data-i18n="news.milos.text">{featured.text}</div>
              <a href={featured.link} className="news-link news_milos-link" data-i18n="news.milos.link">
                Читать полностью...
              </a>
            </div>
          </div>

          {compact.map((item, index) => {
            const boxClass = index === 0 ? 'news_box--prolight' : 'news_box--robe';
            const titleClass = index === 0 ? 'news_prolight-title' : 'news_robe-title';
            const textClass = index === 0 ? 'news_prolight-text' : 'news_robe-text';
            const altKey = index === 0 ? 'prolight' : 'robe';

            return (
              <div key={item.id} className={`news_box ${boxClass}`}>
                <div className={`news-title ${titleClass}`} data-i18n={`news.${altKey}.title`}> {item.title}</div>
                <div className={`news-text ${textClass}`} data-i18n={`news.${altKey}.text`}>{item.text}</div>
                <div className="news_box-image"> <img src={item.imageLight}  alt={item.title} data-i18n={`[alt]news.${altKey}.alt`}/></div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}