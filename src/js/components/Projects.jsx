import React, { Component } from 'react';
import { appData } from '../../data';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
    this.sliderRef = React.createRef();
  }

  componentDidMount() {
    this.updateSliderTransform();
    window.addEventListener('resize', this.updateSliderTransform);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSliderTransform);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.slideIndex !== this.state.slideIndex) {
      this.updateSliderTransform();
    }
  }

  updateSliderTransform = () => {
    if (this.sliderRef.current) {
      const slideWidth = 360;
      this.sliderRef.current.style.transform = `translateX(-${this.state.slideIndex * slideWidth}px)`;
    }
  };

  goPrev = () => {
    this.setState(prev => ({
      slideIndex: prev.slideIndex <= 0 ? 0 : prev.slideIndex - 1
    }));
  };

  goNext = () => {
    const itemsPerView = Math.floor(window.innerWidth / 360);
    const maxIndex = Math.max(0, appData.projects.length - itemsPerView);
    this.setState(prev => ({
      slideIndex: prev.slideIndex >= maxIndex ? maxIndex : prev.slideIndex + 1
    }));
  };

  render() {
    return (
      <section className="projects" id="projects">
        <div className="header-row">
          <h2 className="section-title">
            <span className="title-decor"></span>
            <span className="title-text" data-i18n="projects.title">Наши проекты</span>
          </h2>
          <div className="slider-controls">
            <button  className="slider-prev" type="button" onClick={this.goPrev} aria-label="Предыдущий слайд"></button>
            <button className="slider-next" type="button" onClick={this.goNext} aria-label="Следующий слайд"></button>
          </div>
        </div>

        <div className="slider-container">
          <div className="slider" ref={this.sliderRef}>
            {appData.projects.map((project, index) => (
              <article key={project.id} className="slider_box">
                <div className="slider_box--image">
                  <picture><img className="slider_box-img" src={project.imageLight} alt={project.title} loading="lazy"/></picture>
                </div>
                <div className="slider_box--content">
                  <h4 className="slider_box-title">{project.title}</h4>
                  <p className="slider_box-text">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
}