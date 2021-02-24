import styles from './listItem.module.scss';

export default function ListItem (props) {
  return (<li className={styles.item}>{props.children}</li>)
}