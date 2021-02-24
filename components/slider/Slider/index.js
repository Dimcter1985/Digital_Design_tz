import styles from './slider.module.scss';

export default function Slider (props) {
          return  (<div className={`${styles.slider} ${props.classNameSlider}`}
                    >
                    <div className={`
                          ${styles.control}
                          ${styles.control_left}
                          ${props.classNameControl}
                          `}
                    ></div>
                      <div className={`${styles.wrap} ${styles[`wrap_${props.variant}`]}`}>
                        <ul className={`${styles.slides} ${props.className}`}>{props.children}</ul>
                      </div>
                    <div className={`
                          ${styles.control}
                          ${styles.control_right}
                          ${props.classNameControl}
                          `}
                    ></div>
                  </div>)
}