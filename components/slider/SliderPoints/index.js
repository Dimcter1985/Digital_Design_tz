import styles from './sliderPoints.module.scss';

export default function TeamSliderList () {
  const points = [1, 2, 3, 4, 5, 6];

  let pointer = points.map((point, index) => (
      <li key={index} className={`${styles.point}`}></li>
  ));

  return (<ul className={styles.points}>{pointer}</ul>)
}