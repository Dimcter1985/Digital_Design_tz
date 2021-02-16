import styles from './blockTitle.module.scss';

export default function BlockTitle (props) {
  return (<h2 className={styles.title}>{props.children}</h2>)
}