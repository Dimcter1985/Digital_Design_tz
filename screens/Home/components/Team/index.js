import BlockTitle from 'components/block/BlockTitle';
import BlockDescription from 'components/block/BlockDescription';
import Block from 'components/block/Block';
import SliderTeam from './components/Slider';
import SliderSquare from './components/SliderSquare';

export default function Team () {
  return (<>
            <Block>
              <BlockTitle>our team</BlockTitle>
              <BlockDescription>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
                <br></br>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              </BlockDescription>
              <SliderTeam/>
            </Block>
            <Block>
              <BlockTitle>our team</BlockTitle>
              <BlockDescription>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
                <br></br>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              </BlockDescription>
              <SliderSquare/>
            </Block>
          </>)
}