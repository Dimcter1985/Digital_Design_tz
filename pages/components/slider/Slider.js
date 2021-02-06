import React from 'react';

class Slider extends React.Component {
  render() {
    return (
      <div className="slider">
        <div className="slider__control slider__control--left"></div>
          <div className="slider__wrap">
            <ul className="slider__slides">
              <li className="slider__slide">
                <div className="slider__slide-pic"></div>
                <h3 className="slider__slide-name">branding</h3>
                <p className="slider__slide-txt">Lorem ipsum dolor sit amet, consectetuer 
                adipiscing elit, sed diam nonummy nibh.</p>
              </li>
              <li className="slider__slide">
                <div className="slider__slide-pic"></div>
                <h3 className="slider__slide-name">design</h3>
                <p className="slider__slide-txt">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
              </li>
              <li className="slider__slide">
                <div className="slider__slide-pic"></div>
                <h3 className="slider__slide-name">development</h3>
                <p className="slider__slide-txt">At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.</p>
              </li>
              <li className="slider__slide">
                <div className="slider__slide-pic"></div>
                <h3 className="slider__slide-name">rocket science</h3>
                <p className="slider__slide-txt">Lorem ipsum dolor sit amet, consectetuer 
                adipiscing elit, sed diam nonummy nibh.</p>
              </li>
            </ul>
          </div>
        <div className="slider__control slider__control--right"></div>
      </div>
    )
  }
}

export default Slider;