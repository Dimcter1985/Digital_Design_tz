import Block from '../block/Block';
import BlockTitle from '../blockTitle/BlockTitle';
import BlockDescription from '../blockDescription/BlockDescription';
import Slider from '../slider/Slider';
import SliderTeam from '../sliderTeam/SliderTeam';
import SliderTeamList from '../sliderTeamList/SliderTeamList';
import SliderPoints from '../sliderPoints/SliderPoints';
import styles from './team.module.scss';

export default function Services () {
  return (<section className={styles.section}>
            <h1 className={`${styles.title} ${styles.title_team}`}>Team Components</h1>
            <Block>
              <BlockTitle>our team</BlockTitle>
              <BlockDescription>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
                <br></br>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              </BlockDescription>
              <Slider classNameSlider={styles.slider_team} classNameControl={styles.control_team}>
                <SliderTeam></SliderTeam>
              </Slider>
            </Block>
            <Block>
              <BlockTitle>our team</BlockTitle>
              <BlockDescription>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
                <br></br>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              </BlockDescription>
              <Slider classNameControlList={styles.control_team_list} classNameWrap={styles.wrap_team_list} classNameSlides={styles.slides_team} classNameSliderList={styles.slider_team_list}>
                <SliderTeamList></SliderTeamList>
              </Slider>
              <SliderPoints></SliderPoints>
            </Block>
          </section>)
}