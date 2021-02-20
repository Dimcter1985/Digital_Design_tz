import styles from './sliderItem.module.scss';

export default function SliderItem (props) {
  return (<li className={`${styles.slide} ${styles[`slide_${props.variant}`]}`}>{props.children}</li>)
}