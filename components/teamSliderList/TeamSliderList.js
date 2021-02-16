import styles from './teamSliderList.module.scss';
import TeamImg from '../../public/Mugshot2.png'

export default function TeamSlider () {
          const slides = [
            {
              id: 1,
              image: {pic: TeamImg, alt: 'some photo'},
              name: 'anne hathaway',
              post: 'CEO / Marketing Guru',
              linkF: '#',
              linkG: '#',
            },
            {
              id: 2,
              image: {pic: TeamImg, alt: 'some photo'},
              name: 'anne hathaway',
              post: 'CEO / Marketing Guru',
              linkF: '#',
              linkG: '#'
            },
            {
              id: 3,
              image: {pic: TeamImg, alt: 'some photo'},
              name: 'anne hathaway',
              post: 'CEO / Marketing Guru',
              linkF: '#',
              linkG: '#'
            },
            {
              id: 4,
              image: {pic: TeamImg, alt: 'some photo'},
              name: 'anne hathaway',
              post: 'CEO / Marketing Guru',
              linkF: '#',
              linkG: '#'
            },
            {
              id: 5,
              image: {pic: TeamImg, alt: 'some photo'},
              name: 'anne hathaway',
              post: 'CEO / Marketing Guru',
              linkF: '#',
              linkG: '#'
            },
            {
              id: 6,
              image: {pic: TeamImg, alt: 'some photo'},
              name: 'anne hathaway',
              post: 'CEO / Marketing Guru',
              linkF: '#',
              linkG: '#'
            }
          ];

          const points = [1, 2, 3, 4, 5, 6];

          let slider = slides.map((slide) => (
            <li key={slide.id} className={styles.slide}>
              <div className={styles.pic}>
                <img src={slide.image.pic} alt={slide.image.alt} className={styles.img}></img>
                <div className={styles.info}>
                  <h3 className={styles.name}>{slide.name}</h3>
                  <span className={styles.post}>{slide.post}</span>
                  <ul className={styles.social}>
                    <li><a className={`${styles.link} ${styles.link_f}`} href={slide.linkF}></a></li>
                    <li><a className={`${styles.link} ${styles.link_g}`} href={slide.linkG}></a></li>
                  </ul>
                </div>
              </div>
              
            </li>
          ));

          let pointer = points.map((point, index) => {
            if(index === 0) {
              return <li key={index} className={`${styles.point} ${styles.point_active}`}></li>
            } else {
              return <li key={index} className={styles.point}></li>
            }
          });

          return  (<div className={styles.slider}>
                    <div className={`${styles.control} ${styles.control_left}`}></div>
                      <div className={styles.wrap}>
                        <ul className={styles.slides}>{slider}</ul>
                      </div>
                    <div className={`${styles.control} ${styles.control_right}`}></div>
                    <ul className={styles.points}>{pointer}</ul>
                  </div>)
}