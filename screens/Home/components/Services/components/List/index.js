import List from 'components/list/List';
import ListItem from 'components/list/ListItem';
import ListImg from 'components/list/ListImg';
import ListName from 'components/list/ListName';
import ListText from 'components/list/ListText';
import Ellipse from './images/Ellipse1.png';

export default function ListServices () {
  const items = [
    { 
      id: 1,
      image: {pic: Ellipse, alt: 'some photo'}, 
      name: 'branding', 
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
    },
    {
      id: 2,
      image: {pic: Ellipse, alt: 'some photo'}, 
      name: 'design', 
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
    },
    {
      id: 3,
      image: {pic: Ellipse, alt: 'some photo'}, 
      name: 'development', 
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
    },
    {
      id: 4,
      image: {pic: Ellipse, alt: 'some photo'}, 
      name: 'rocket science', 
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
    }
  ];

  let list = items.map((item) => (
    <ListItem key={item.id}>
      <ListImg src={item.image.pic} alt={item.image.alt}/>
      <ListName>{item.name}</ListName>
      <ListText>{item.text}</ListText>
    </ListItem>
  ));

  return (<List>{list}</List>)
}