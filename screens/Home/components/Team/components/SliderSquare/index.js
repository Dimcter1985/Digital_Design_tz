import Slider from 'components/slider/Slider';
import SliderImage from 'components/slider/SliderImage';
import SliderItem from 'components/slider/SliderItem';
import SliderName from 'components/slider/SliderName';
import SliderPost from 'components/slider/SliderPost';
import SliderSocial from 'components/slider/sliderSocial/SliderSocial';
import SliderInfo from 'components/slider/SliderInfo';
import SliderSocialLink from 'components/slider/sliderSocial/SliderSocialLink';
import SliderPoints from 'components/slider/sliderPoints/SliderPoints';
import SliderPointsItem from 'components/slider/sliderPoints/SliderPointsItem';
import Img from './images/Mugshot2.png';
import styles from './sliderSquare.module.scss';

export default function SliderSquare () {
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
    },
    {
      id: 5,
      image: {pic: Img, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      socialLinks: [{ type: 'facebook', url: '#' }, { type: 'gmail', url: '#' }]
    },
    {
      id: 6,
      image: {pic: Img, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      socialLinks: [{ type: 'facebook', url: '#' }, { type: 'gmail', url: '#' }]
    }
  ];

  let slider = slides.map((slide) => (
    <SliderItem key={slide.id} variant="variant_team">
      <SliderImage 
        src={slide.image.pic} 
        alt={slide.image.alt} 
        variant="variant_team"
      >
        <SliderInfo>
          <SliderName variant="variant_team">{slide.name}</SliderName>
          <SliderPost>{slide.post}</SliderPost>
          <SliderSocial className={styles.social_team_square}>{
            slide.socialLinks.map((link, index) => (
              <SliderSocialLink 
                key ={index}
                href={link.url}
                type={link.type}
                variant="white"
              />
            ))
          }</SliderSocial>
        </SliderInfo>
      </SliderImage>
    </SliderItem>
  ));

  let pointer = slides.map((slide) => (
    <SliderPointsItem key={slide.id}/>
  ))

  return (<>  
            <Slider 
              classNameControl={styles.control_team_square} 
              variant="variant_team" 
              className={styles.slides_team} 
              classNameSlider={styles.slider_team_square}>{slider}
            </Slider>
            <SliderPoints>{pointer}</SliderPoints>
          </>)
}