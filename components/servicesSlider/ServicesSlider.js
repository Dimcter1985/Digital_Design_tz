import styles from './servisesSlider.module.scss';
import Img from '../../public/img.png'

export default function ServisesSlider () {
          const slides = [
            {
              id: 1,
              image: {pic: Img, alt: 'some photo'},
              name: 'branding',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
            },
            {
              id: 2,
              image: {pic: Img, alt: 'some photo'},
              name: 'design',
              text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
            },
            {
              id: 3,
              image: {pic: Img, alt: 'some photo'},
              name: 'development',
              text: 'At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.'
            },
            {
              id: 4,
              image: {pic: Img, alt: 'some photo'},
              name: 'rocket science',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
            }
          ];

          let slider = slides.map((slide) => (
            <li key={slide.id} className={styles.slide}>
                <div className={styles.pic}>
                  <img src={slide.image.pic} alt={slide.image.alt} className={styles.img}></img>
                </div>
                <h3 className={styles.name}>{slide.name}</h3>
                <p className={styles.txt}>{slide.text}</p>
            </li>
          ));

          return  (<div className={styles.slider}>
                    <div className={`${styles.control} ${styles.control_left}`}></div>
                      <div className={styles.wrap}>
                        <ul className={styles.slides}>{slider}</ul>
                      </div>
                    <div className={`${styles.control} ${styles.control_right}`}></div>
                  </div>)
}