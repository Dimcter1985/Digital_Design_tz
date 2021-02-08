import styles from './list.module.scss';

export default function Services () {
  return  (<ul className={styles.list}>
            <li className={styles.list__item}>
              <h3 className={styles.list__name}>branding</h3>
              <p className={styles.list__txt}>
                Lorem ipsum dolor sit amet, consectetuer 
                adipiscing elit, sed diam nonummy nibh.
              </p>
            </li>
            <li className={styles.list__item}>
              <h3 className={styles.list__name}>design</h3>
              <p className={styles.list__txt}>
                Lorem ipsum dolor sit amet, consectetuer 
                adipiscing elit, sed diam nonummy nibh.
              </p>
            </li>
            <li className={styles.list__item}>
              <h3 className={styles.list__name}>development</h3>
              <p className={styles.list__txt}>
                Lorem ipsum dolor sit amet, consectetuer 
                adipiscing elit, sed diam nonummy nibh.
              </p>
            </li>
            <li className={styles.list__item}>
              <h3 className={styles.list__name}>rocket science</h3>
              <p className={styles.list__txt}>
                Lorem ipsum dolor sit amet, consectetuer 
                adipiscing elit, sed diam nonummy nibh.
              </p>
            </li>
          </ul>)
}