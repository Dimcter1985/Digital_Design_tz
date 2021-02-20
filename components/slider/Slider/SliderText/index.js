import styles from './sliderText.module.scss';

export default function SliderText (props) {

  return (
    <p className={`${styles.txt} ${styles[`txt_${props.variant}`]}`}>{props.children}</p>
  )

}