import styles from './sliderSocial.module.scss';

export default function SliderSocial (props) {
  return (<ul className={`${styles.social} ${props.className}` }>{props.children}</ul>)
}