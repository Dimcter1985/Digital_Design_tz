import styles from './sliderPost.module.scss';

export default function SliderPost (props) {
  return (<span className={styles.post}>{props.children}</span>)
}