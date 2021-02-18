import styles from './sliderInfo.module.scss';

export default function TeamSliderList (props) {
  return (
    <div className={styles.info}>{props.children}</div>
  )
}