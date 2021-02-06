import React from 'react';
import Slider from '../slider/Slider';
import List from '../list/List';

class Services extends React.Component {
  render() {
    return (
      <section className="section">
        <h1 className="title">Services</h1>
        <div className="block">
          <h2 className="title title--block">services we provide</h2>
          <p className="block__text">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
          </p> 
          <p className="block__text">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          </p>
          <Slider />
        </div> 
        <div className="block">
          <h2 className="title title--block">services we provide</h2>
          <p className="block__text">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
          </p>
          <p className="block__text">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          </p>
          <List />
        </div> 
      </section>
    )
  }
}

export default Services;