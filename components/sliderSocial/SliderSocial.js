import styles from './sliderSocial.module.scss';

export default function SliderSocial (props) {
  return (
    <ul className={`${styles.social} ${props.classNameSocial}` }>
      <li><a className={`${styles.link} ${props.classNameLink} ${props.classNameLinkF} ${styles.link_f}`}></a></li>
      <li><a className={`${styles.link} ${props.classNameLink} ${props.classNameLinkG} ${styles.link_g}`}></a></li>
    </ul>
  )
}