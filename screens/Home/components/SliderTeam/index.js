import Slider from '../../../../components/Slider';
import SliderImage from '../../../../components/Slider/SliderImage'
import SliderItem from '../../../../components/Slider/SliderItem'
import SliderName from '../../../../components/Slider/SliderName'
import SliderText from '../../../../components/Slider/SliderText'
import SliderPost from '../../../../components/Slider/SliderPost'
import SliderSocial from '../../../../components/Slider/SliderSocial'
import TeamImg from '../../../../images/Mugshot2.png'
import styles from './sliderTeam.module.scss'

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
    <SliderItem key={slide.id}>
      <SliderImage src={slide.image.pic} alt={slide.image.alt}/>
      <SliderName classNameName={styles.name_team}>{slide.name}</SliderName>
      <SliderPost>{slide.post}</SliderPost>
      <SliderText classNameText={styles.text_team}>{slide.text}</SliderText>
      <SliderSocial/>
    </SliderItem>
  ));

  return (<Slider classNameSlider={styles.slider_team} classNameControl={styles.control_team}>{slider}</Slider>)
}