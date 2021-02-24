import Head from 'next/head';
import Services from './components/Services';
import Team from './components/Team';
import Section from 'components/section/Section';
import SectionTitle from 'components/section/SectionTitle/';
import styles from './home.module.scss';

export default function Home () {
  return  (<>
            <Head>
              <title>Digital Design</title>
            </Head>
            <Section>
              <SectionTitle>Services</SectionTitle>
              <Services/>
            </Section>
            <Section>
              <SectionTitle className={styles.title_team}>Team Components</SectionTitle>
              <Team/>
            </Section>
          </>
            )
}