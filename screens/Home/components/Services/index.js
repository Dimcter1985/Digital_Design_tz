import SliderServices from './components/Slider';
import List from './components/list';
import BlockTitle from 'components/block/BlockTitle';
import BlockDescription from 'components/block/BlockDescription';
import Block from 'components/block/Block';

export default function Services () {
  return   (<>
              <Block>
                <BlockTitle>services we provide</BlockTitle>
                <BlockDescription>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
                  <br></br>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                </BlockDescription>
                <SliderServices/>
              </Block>
              <Block>
                <BlockTitle>services we provide</BlockTitle>
                <BlockDescription>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
                  <br></br>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                </BlockDescription>
                <List/>
              </Block>
            </>)
}