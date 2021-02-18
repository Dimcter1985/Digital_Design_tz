import styles from './sectionTitle.module.scss'

export default function SectionTitle (props) {
  return  (
          <h1 className={`${styles.title} ${props.classNameTeam}`}>{props.children}</h1>    
            )
}