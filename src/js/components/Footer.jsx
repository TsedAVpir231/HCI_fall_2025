import React, { Component } from 'react';
import { appData } from '../../data';

export default class Footer extends Component {
  render() {
    const { organization } = appData;

    return (
      <footer>
        <div className="footer_container">
          <div className="footer_header">
            <a className="footer_header--tel" href={`tel:${organization.phone.replace(/[^\d]/g, '')}`} data-i18n="[href]footer.tel">{organization.phone}</a>
            <a className="footer_header--adress" href="https://goo.gl/maps/3wTGcZtCQGf1NMYS6" target="_blank" rel="noopener noreferrer" data-i18n="footer.address">{organization.address}</a>
            <a className="footer_header--mail"href={`mailto:${organization.email}`}data-i18n="[href]footer.email">{organization.email}</a>
          </div>

          <div className="footer_divider"></div>

          <div className="footer_body">
            <div className="footer_body--box">
              <a className="footer_body-link" href="/" data-navigate data-i18n="header.menu.about">О компании</a>
              <a className="footer_body-link" href="/index.html#news" data-navigate data-i18n="news.title">Новости</a>
            </div>
            <div className="footer_body--box">
              <a className="footer_body-link footer_link--middle" href="/catalog.html" data-navigate data-i18n="header.menu.catalog">Каталог</a>
              <a className="footer_body-link footer_link--middle" href="/index.html#rent" data-navigate data-i18n="rent.title">Аренда</a>
            </div>
            <div className="footer_body--box">
              <a className="footer_body-link footer_link--right" href="#projects" data-navigate data-i18n="projects.title">Наши проекты</a>
              <a className="footer_body-link footer_link--right" href="/index.html" data-navigate data-i18n="header.menu.service">Сервисное обслуживание</a>
            </div>
          </div>

          <div className="footer_divider"></div>

          <div className="footer_bottom">
            <p className="footer_bottom--text" data-i18n="footer.copyright">© 2019 ЗАО «Транслайт». Все права защищены.</p>
            <p className="footer_bottom--text" data-i18n="footer.design">Разработка и дизайн - D-e-n.ru</p>
          </div>
        </div>
      </footer>
    );
  }
}