import styles from './sliderImage.module.scss';

export default function SliderImage (props) {
  return (
    <div className={`${styles.pic} ${props.classNamePic}`}>
      <img src={`${props.src}`} alt={`${props.alt}`} className={`${styles.img} ${props.classNameImg}`}></img>
      {props.children}
    </div>
  )
}
