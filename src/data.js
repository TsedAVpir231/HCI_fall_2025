import logo from './assets/logo.svg';

import proj1Light from './assets/projects/img1.webp';
import proj2Light from './assets/projects/img2.webp';

import cat1Light from './assets/products/img1.svg';
import cat2Light from './assets/products/img2.svg';
import cat3Light from './assets/products/img3.svg';

import rentLight from './assets/products/img4.svg';

import news1Light from './assets/news/img1.webp';
import news2Light from './assets/news/img2.webp';
import news3Light from './assets/news/img3.webp';

export const appData = {
  organization: {
    name: "TransLight",
    logo: logo,
    phone: "(812) 710-80-25",
    email: "mail@translight.ru",
    address: "191180, Санкт-Петербург, Набережная реки Фонтанки, 90, корпус 1"
  },
  page: {
    title: "Светотехническое оборудование в Петербурге",
    subtitle: "Продажа, аренда светотехнического оборудования. Оформление официальных мероприятий под ключ."
  },
  projects: [
    { id: 1, title: "ССК «ОЛИМП»", description: "Световое оформление форума «Шубы-2019»", imageLight: proj2Light},
    { id: 2, title: "ССК «ОЛИМП»", description: "Световое оформление форума «Шубы-2019»", imageLight: proj1Light},
    { id: 3, title: "ССК «ОЛИМП»", description: "Световое оформление форума «Шубы-2019»", imageLight: proj2Light},
    { id: 4, title: "ССК «ОЛИМП»", description: "Световое оформление форума «Шубы-2019»", imageLight: proj1Light}
  ],
  catalog: [
    { id: 1, title: "Статичные светодиодные приборы", imageLight: cat1Light},
    { id: 2, title: "Контроллеры", imageLight: cat2Light},
    { id: 3, title: "Аксессуары", imageLight: cat3Light}
  ],
  rent: {
    description: "Мы занимаемся прокатом светового и сценического оборудования ведущих мировых производителей...",
    items: [
      {
        id: 1,
        title: "Robe Robin ParFect 100",
        imageLight: rentLight,
        features: [
          "Источник света 12 светодиодов RGBW по 15 Вт каждый",
          "Угол раскрытия 7°",
          "В комплекте рассеивающая линза 40°",
          "Потребляемая мощность 200 Вт"
        ]
      }
    ]
  },
  news: [
    {
      id: 1, type: "featured", title: "Семинар Milos", date: "27.01.2019",
      text: "Наши сотрудники прошли последний семинар от компании Milos...",
      imageLight: news1Light
    },
    {
      id: 2, type: "compact", title: "Выставка Prolight+Sound",
      text: "30 контрактов, тысячи посетителей...",
      imageLight: news2Light
    },
    {
      id: 3, type: "compact", title: "Семинар Robe",
      text: "30 контрактов, тысячи посетителей...",
      imageLight: news3Light
    }
  ]
};