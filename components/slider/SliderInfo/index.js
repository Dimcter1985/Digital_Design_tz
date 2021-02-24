import styles from './sliderInfo.module.scss';

export default function SliderInfo (props) {
  return (<div className={styles.info}>{props.children}</div>)
}