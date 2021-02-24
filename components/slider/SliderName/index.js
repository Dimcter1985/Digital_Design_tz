import styles from './sliderName.module.scss';

export default function SliderName (props) {
  return (<h3 className={`
              ${styles.name} 
              ${styles[`name_${props.variant}`]} 
              ${props.className}`}>
          {props.children}</h3>)
}