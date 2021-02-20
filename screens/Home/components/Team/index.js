import BlockTitle from 'components/Block/BlockTitle';
import BlockDescription from 'components/Block/BlockDescription';
import Block from 'components/Block';
import SliderTeam from 'screens/Home/components/SliderTeam';
import SliderTeamList from 'screens/Home/components/SliderTeamSquare';
import SliderPoints from 'components/slider/Slider/SliderPoints';

export default function Services () {
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
              <SliderTeamList/>
              <SliderPoints/>
            </Block>
          </>)
}