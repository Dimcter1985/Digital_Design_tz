import Slider from '../slider/Slider';
import SliderServices from '../sliderServices/SliderServices';
import List from '../list/List';
import BlockTitle from '../blockTitle/BlockTitle';
import BlockDescription from '../blockDescription/BlockDescription';
import Block from '../block/Block';
import styles from './services.module.scss';

export default function Services () {
  return   (<section className={styles.section}>
              <h1 className={styles.title}>Services</h1>
              <Block>
                  <BlockTitle>services we provide</BlockTitle>
                  <BlockDescription>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
                    <br></br>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                  </BlockDescription>
                  <Slider>
                    <SliderServices></SliderServices>
                  </Slider>
              </Block>
              <Block>
                <BlockTitle>services we provide</BlockTitle>
                <BlockDescription>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
                  <br></br>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                </BlockDescription>
                <List></List>
              </Block>
            </section>)
}