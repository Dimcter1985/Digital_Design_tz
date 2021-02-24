import styles from './list.module.scss';

export default function List (props) {
  return (<ul className={styles.list}>{props.children}</ul>)
}
