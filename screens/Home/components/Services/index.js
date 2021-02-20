import SliderServices from 'screens/Home/components/SliderServices';
import List from 'components/list/';
import BlockTitle from 'components/Block/BlockTitle';
import BlockDescription from 'components/Block/BlockDescription';
import Block from 'components/Block';

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