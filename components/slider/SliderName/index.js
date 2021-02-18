import styles from './sliderName.module.scss';

export default function SliderName (props) {
  return (
    <h3 className={`${styles.name} ${props.classNameName} ${props.classNameTeamList}`}>{props.children}</h3>
  )

}