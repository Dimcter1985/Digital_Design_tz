import Slider from '../../../../components/jkl';
import SliderImage from '../../../../components/jkl/SliderImage'
import SliderItem from '../../../../components/jkl/SliderItem'
import SliderName from '../../../../components/jkl/SliderName'
import SliderText from '../../../../components/jkl/SliderText'
import SliderPost from '../../../../components/jkl/SliderPost'
import SliderSocial from '../../../../components/jkl/SliderSocial'
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