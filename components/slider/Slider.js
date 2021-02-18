import styles from './slider.module.scss';

export default function Slider (props) {
          return  (<div className={`${styles.slider} ${props.classNameSlider} ${props.classNameSliderList}`}>
                    <div className={`${styles.control} ${styles.control_left} ${props.classNameControl} ${props.classNameControlList}`}></div>
                      <div className={`${styles.wrap} ${props.classNameWrap}`}>
                        <ul className={`${styles.slides} ${props.classNameSlides}`}>{props.children}</ul>
                      </div>
                    <div className={`${styles.control} ${styles.control_right} ${props.classNameControl} ${props.classNameControlList}`}></div>
                  </div>)
}