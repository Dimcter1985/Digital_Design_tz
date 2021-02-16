import styles from './teamSlider.module.scss';
import TeamImg from '../../public/Mugshot.png'

export default function TeamSlider () {
  const slides = [
    {
      id: 1,
      image: {pic: TeamImg, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      linkF: '#',
      linkG: '#'
    },
    {
      id: 2,
      image: {pic: TeamImg, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      linkF: '#',
      linkG: '#'
    },
    {
      id: 3,
      image: {pic: TeamImg, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      linkF: '#',
      linkG: '#'
    },
    {
      id: 4,
      image: {pic: TeamImg, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      linkF: '#',
      linkG: '#'
    }
  ];

  let slider = slides.map((slide) => (
    <li key={slide.id} className={styles.slide}>
        <div className={styles.pic}>
          <img src={slide.image.pic} alt={slide.image.alt} className={styles.img}></img>
        </div>
        <h3 className={styles.name}>{slide.name}</h3>
        <span className={styles.post}>{slide.post}</span>
        <p className={styles.txt}>{slide.text}</p>
        <ul className={styles.social}>
          <li><a className={`${styles.link} ${styles.link_f}`} href={slide.linkF}></a></li>
          <li><a className={`${styles.link} ${styles.link_g}`} href={slide.linkG}></a></li>
        </ul>
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