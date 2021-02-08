import Slider from '../slider/Slider';
import List from '../list/List';
import styles from './services.module.scss';

export default function Services () {
  return  (<section className={styles.section}>
            <h1 className={styles.title}>Services</h1>
            <div className={styles.block}>
              <h2 className={`${styles.title} ${styles.title_block}`}>services we provide</h2>
              <p className={styles.block__text}>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
              </p> 
              <p className={styles.block__text}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              </p>
              <Slider />
            </div> 
            <div className={styles.block}>
              <h2 className={`${styles.title} ${styles.title_block}`}>services we provide</h2>
              <p className={styles.block__text}>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
              </p>
              <p className={styles.block__text}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              </p>
              <List />
            </div> 
          </section>)
}