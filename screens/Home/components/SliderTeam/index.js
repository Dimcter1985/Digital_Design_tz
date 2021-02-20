import Slider from 'components/slider/Slider';
import SliderImage from 'components/slider/Slider/SliderImage'
import SliderItem from 'components/slider/Slider/SliderItem'
import SliderName from 'components/slider/Slider/SliderName'
import SliderText from 'components/slider/Slider/SliderText'
import SliderPost from 'components/slider/Slider/SliderPost'
import SliderSocial from 'components/slider/Slider/SliderSocial'
import SliderSocialLink from 'components/slider/Slider/SliderSocial/SliderSocialLink'
import TeamImg from 'screens/Home/components/SliderTeam/images/Mugshot.png'
import styles from 'screens/Home/components/SliderTeam/sliderTeam.module.scss'

export default function TeamSlider () {
  const slides = [
    {
      id: 1,
      image: {pic: TeamImg, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      socialLinks: [{ type: 'facebook', url: '#' }, { type: 'gmail', url: '#' }]
    },
    {
      id: 2,
      image: {pic: TeamImg, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      socialLinks: [{ type: 'facebook', url: '#' }, { type: 'gmail', url: '#' }]
    },
    {
      id: 3,
      image: {pic: TeamImg, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      socialLinks: [{ type: 'facebook', url: '#' }, { type: 'gmail', url: '#' }]
    },
    {
      id: 4,
      image: {pic: TeamImg, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      socialLinks: [{ type: 'facebook', url: '#' }, { type: 'gmail', url: '#' }]
    }
  ];


  let slider = slides.map((slide) => (
    <SliderItem key={slide.id}>
      <SliderImage src={slide.image.pic} alt={slide.image.alt}/>
      <SliderName classNameName={styles.name_team}>{slide.name}</SliderName>
      <SliderPost>{slide.post}</SliderPost>
      <SliderText variant="variant_team">{slide.text}</SliderText>
      <SliderSocial>{
        slide.socialLinks.map((link, index) => (
          <SliderSocialLink key ={index} href={link.url} type={link.type}/>
        ))
      }</SliderSocial>
    </SliderItem>
  ));

  return (<Slider classNameSlider={styles.slider_team} classNameControl={styles.control_team}>{slider}</Slider>)
}