import Block from '../block/Block';
import BlockTitle from '../blockTitle/BlockTitle';
import BlockDescription from '../blockDescription/BlockDescription';
import TeamSlider from '../teamSlider/TeamSlider';
import TeamSliderList from '../teamSliderList/TeamSliderList';
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
              <TeamSlider></TeamSlider>
            </Block>
            <Block>
              <BlockTitle>our team</BlockTitle>
              <BlockDescription>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
                <br></br>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              </BlockDescription>
              <TeamSliderList></TeamSliderList>
            </Block>
          </section>)
}