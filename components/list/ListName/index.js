import styles from './listName.module.scss';

export default function ListName (props) {
  return (<h3 className={styles.name}>{props.children}</h3>)
}