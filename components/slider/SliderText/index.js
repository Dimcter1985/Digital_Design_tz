import styles from './sliderText.module.scss';

export default function SliderText (props) {
  return (
    <p className={`${styles.txt} ${props.classNameText}`}>{props.children}</p>
  )

}