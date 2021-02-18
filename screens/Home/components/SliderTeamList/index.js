import Slider from '../../../../components/Slider';
import SliderImage from '../../../../components/Slider/SliderImage'
import SliderItem from '../../../../components/Slider/SliderItem'
import SliderName from '../../../../components/Slider/SliderName'
import SliderPost from '../../../../components/Slider/SliderPost'
import SliderSocial from '../../../../components/Slider/SliderSocial'
import SliderInfo from '../../../../components/Slider/SliderInfo'
import TeamImg from '../../../../images/Mugshot2.png'
import styles from './sliderTeamList.module.scss';

export default function SliderTeamList () {
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
    <SliderItem key={slide.id} classNameSlide={styles.slide_team_list}>
      <SliderImage src={slide.image.pic} alt={slide.image.alt} classNameImg={styles.img_rect} classNamePic={styles.pic_big}>
        <SliderInfo>
          <SliderName classNameTeamList={styles.name_team_list}>{slide.name}</SliderName>
          <SliderPost>{slide.post}</SliderPost>
          <SliderSocial classNameSocial={styles.social_team_list}  classNameLinkF={styles.link_team_list} classNameLink={styles.link_team_list_f} classNameLinkG={styles.link_team_list_g}/>
        </SliderInfo>
      </SliderImage>
    </SliderItem>
  ));

  return (<Slider classNameControlList={styles.control_team_list} classNameWrap={styles.wrap_team_list} classNameSlides={styles.slides_team} classNameSliderList={styles.slider_team_list}>{slider}</Slider>)
}