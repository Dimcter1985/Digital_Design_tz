import styles from './blockDescription.module.scss';

export default function BlockDescription (props) {
  return  (<p className={styles.text}>{props.children}</p>)
}