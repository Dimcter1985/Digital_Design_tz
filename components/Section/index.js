import styles from './section.module.scss'


export default function Section (props) {
  return  (
            <section className={styles.section}>{props.children}</section>
          
            )
}