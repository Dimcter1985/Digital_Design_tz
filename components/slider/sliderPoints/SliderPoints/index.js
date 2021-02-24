import styles from './sliderPoints.module.scss';

export default function SliderPoints (props) {
  return (<ul className={styles.points}>{props.children}</ul>)
}