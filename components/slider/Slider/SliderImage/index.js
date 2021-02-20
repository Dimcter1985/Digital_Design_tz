import styles from './sliderImage.module.scss';

export default function SliderImage (props) {
  return (
    <div className={`${styles.pic} ${styles[`pic_${props.variant}`]}`}>
      <img src={`${props.src}`} alt={`${props.alt}`} className={`${styles.img}`}></img>
      {props.children}
    </div>
  )
}
