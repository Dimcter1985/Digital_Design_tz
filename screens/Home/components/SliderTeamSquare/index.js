import Slider from 'components/slider/Slider'
import SliderImage from 'components/slider/Slider/SliderImage'
import SliderItem from 'components/slider/Slider/SliderItem'
import SliderName from 'components/slider/Slider/SliderName'
import SliderPost from 'components/slider/Slider/SliderPost'
import SliderSocial from 'components/slider/Slider/SliderSocial'
import SliderInfo from 'components/slider/Slider/SliderInfo'
import SliderSocialLink from 'components/slider/Slider/SliderSocial/SliderSocialLink'
import TeamImgSquare from 'screens/Home/components/SliderTeamSquare/images/Mugshot2.png'
import styles from 'screens/Home/components/SliderTeamSquare/sliderTeamSquare.module.scss'

export default function SliderTeamSquare () {
  const slides = [
    {
      id: 1,
      image: {pic: TeamImgSquare, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      socialLinks: [{ type: 'facebook', url: '#' }, { type: 'gmail', url: '#' }]
    },
    {
      id: 2,
      image: {pic: TeamImgSquare, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      socialLinks: [{ type: 'facebook', url: '#' }, { type: 'gmail', url: '#' }]
    },
    {
      id: 3,
      image: {pic: TeamImgSquare, alt: 'some photo'},
      name: 'anne hathaway',
      post: 'CEO / Marketing Guru',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
      socialLinks: [{ type: 'facebook', url: '#' }, { type: 'gmail', url: '#' }]
    },
    {
      id: 4,
      image: {pic: TeamImgSquare, alt: 'some photo'},
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
          <SliderSocial classNameSocial={styles.social_team_square}>{
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

  return (<Slider 
            classNameControlList={styles.control_team_square} 
            variant="variant_team" 
            classNameSlides={styles.slides_team} 
            classNameSliderList={styles.slider_team_square}>{slider}
          </Slider>)
}