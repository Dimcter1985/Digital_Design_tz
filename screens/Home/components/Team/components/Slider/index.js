import Slider from 'components/slider/Slider';
import SliderImage from 'components/slider/SliderImage';
import SliderItem from 'components/slider/SliderItem';
import SliderName from 'components/slider/SliderName';
import SliderText from 'components/slider/SliderText';
import SliderPost from 'components/slider/SliderPost';
import SliderSocial from 'components/slider/sliderSocial/SliderSocial';
import SliderSocialLink from 'components/slider/sliderSocial/SliderSocialLink';
import Img from './images/Mugshot.png';
import styles from './sliderTeam.module.scss';

export default function SliderTeam () {
  const slides = [
    {
      id: 1,
      image: {pic: Img, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      socialLinks: [{ type: 'facebook', url: '#' }, { type: 'gmail', url: '#' }]
    },
    {
      id: 2,
      image: {pic: Img, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      socialLinks: [{ type: 'facebook', url: '#' }, { type: 'gmail', url: '#' }]
    },
    {
      id: 3,
      image: {pic: Img, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      socialLinks: [{ type: 'facebook', url: '#' }, { type: 'gmail', url: '#' }]
    },
    {
      id: 4,
      image: {pic: Img, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      socialLinks: [{ type: 'facebook', url: '#' }, { type: 'gmail', url: '#' }]
    }
  ];

  let slider = slides.map((slide) => (
    <SliderItem key={slide.id}>
      <SliderImage src={slide.image.pic} alt={slide.image.alt}/>
      <SliderName className={styles.name_team}>{slide.name}</SliderName>
      <SliderPost>{slide.post}</SliderPost>
      <SliderText variant="variant_team">{slide.text}</SliderText>
      <SliderSocial>{
        slide.socialLinks.map((link, index) => (
          <SliderSocialLink
            key={index} 
            href={link.url} 
            type={link.type}
          />
        ))
      }</SliderSocial>
    </SliderItem>
  ));

  return (<Slider classNameSlider={styles.slider_team} classNameControl={styles.control_team}>{slider}</Slider>)
}