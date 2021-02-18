import styles from './list.module.scss';
import Ellipse from '../../images/Ellipse1.png'

export default function List () {
  const items = [
    { 
      id: 1,
      image: {pic: Ellipse, alt: 'some photo'}, 
      name: 'branding', 
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
    },
    {
      id: 2,
      image: {pic: Ellipse, alt: 'some photo'}, 
      name: 'design', 
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
    },
    {
      id: 3,
      image: {pic: Ellipse, alt: 'some photo'}, 
      name: 'development', 
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
    },
    {
      id: 4,
      image: {pic: Ellipse, alt: 'some photo'}, 
      name: 'rocket science', 
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
    }
  ];

  let list = items.map((item) => (
            <li key={item.id} className={styles.item}>
                <div className={styles.pic}>
                  <img src={item.image.pic} alt={item.image.alt} className={styles.img}></img>
                </div>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.txt}>{item.text}</p>
            </li>
  ));
  
  return (<ul className={styles.list}>{list}</ul>)
}
