import styles from './sliderSocialLink.module.scss'

export default function SliderSocialLink (props) {
  return (<li>
            <a 
              className={`${styles.link}
              ${props.classNameLink} 
              ${styles[`link_${props.type}`]}
              ${styles[`link_${props.variant}`]}`}
              href={props.href}>
            </a>
          </li>)
}