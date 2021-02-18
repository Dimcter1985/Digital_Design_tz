import styles from './sliderItem.module.scss';

export default function SliderItem (props) {
  return (<li className={`${styles.slide} ${props.classNameSlide}`}>{props.children}</li>)
}