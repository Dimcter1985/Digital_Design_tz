import styles from './block.module.scss';

export default function Block (props) {
  return ( <div className={styles.block}>{props.children}</div> )
}