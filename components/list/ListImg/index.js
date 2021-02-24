import styles from './listImg.module.scss';

export default function listImg (props) {
  return (<div className={styles.pic}>
            <img src={props.src} alt={props.alt} className={styles.img}></img>
          </div>)
}