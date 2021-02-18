
import SliderImage from '../sliderImage/SliderImage'
import SliderItem from '../sliderItem/SliderItem'
import SliderName from '../sliderName/SliderName'
import SliderText from '../sliderText/SliderText'
import Img from '../../images/img.png'

export default function SliderServices () {
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
      <SliderItem key={slide.id}>
        <SliderImage src={slide.image.pic} alt={slide.image.alt}></SliderImage>
        <SliderName>{slide.name}</SliderName>
        <SliderText>{slide.text}</SliderText>
      </SliderItem>
  ));

  return slider
}