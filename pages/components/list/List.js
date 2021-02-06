import React from 'react';

class List extends React.Component {
  render() {
    return (
      <div>
        <ul className="list">
          <li className="list__item">
            <h3 className="list__item-name">branding</h3>
            <p className="list__item-txt">
              Lorem ipsum dolor sit amet, consectetuer 
              adipiscing elit, sed diam nonummy nibh.
            </p>
          </li>
          <li className="list__item">
            <h3 className="list__item-name">design</h3>
            <p className="list__item-txt">
              Lorem ipsum dolor sit amet, consectetuer 
              adipiscing elit, sed diam nonummy nibh.
            </p>
          </li>
          <li className="list__item">
            <h3 className="list__item-name">development</h3>
            <p className="list__item-txt">
              Lorem ipsum dolor sit amet, consectetuer 
              adipiscing elit, sed diam nonummy nibh.
            </p>
          </li>
          <li className="list__item">
            <h3 className="list__item-name">rocket science</h3>
            <p className="list__item-txt">
              Lorem ipsum dolor sit amet, consectetuer 
              adipiscing elit, sed diam nonummy nibh.
            </p>
          </li>
        </ul>
      </div>
    )
  }
}

export default List;