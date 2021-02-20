import styles from './sliderName.module.scss';

export default function SliderName (props) {
  return (
    <h3 className={`${styles.name} 
                    ${styles[`name_${props.variant}`]} 
                    ${props.classNameName}`}
    >{props.children}</h3>
  )

}