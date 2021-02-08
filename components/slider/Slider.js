import styles from './slider.module.scss';

export default function Services () {
  return  (<div className={styles.slider}>
            <div className={`${styles.slider__control} ${styles.slider__control_left}`}></div>
              <div className={styles.slider__wrap}>
                <ul className={styles.slider__slides}>
                  <li className={styles.slider__slide}>
                    <div className={styles.slider__pic}></div>
                    <h3 className={styles.slider__name}>branding</h3>
                    <p className={styles.slider__txt}>Lorem ipsum dolor sit amet, consectetuer 
                    adipiscing elit, sed diam nonummy nibh.</p>
                  </li>
                  <li className={styles.slider__slide}>
                    <div className={styles.slider__pic}></div>
                    <h3 className={styles.slider__name}>design</h3>
                    <p className={styles.slider__txt}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                  </li>
                  <li className={styles.slider__slide}>
                    <div className={styles.slider__pic}></div>
                    <h3 className={styles.slider__name}>development</h3>
                    <p className={styles.slider__txt}>At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.</p>
                  </li>
                  <li className={styles.slider__slide}>
                    <div className={styles.slider__pic}></div>
                    <h3 className={styles.slider__name}>rocket science</h3>
                    <p className={styles.slider__txt}>Lorem ipsum dolor sit amet, consectetuer 
                    adipiscing elit, sed diam nonummy nibh.</p>
                  </li>
                </ul>
              </div>
            <div className={`${styles.slider__control} ${styles.slider__control_right}`}></div>
          </div>)
}