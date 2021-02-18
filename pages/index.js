import Head from 'next/head';
import Services from '../screens/Home/components/Services';
import Team from '../screens/Home/components/Team';
import Section from '../components/Section'
import SectionTitle from '../components/Section/SectionTitle/'
import styles from '../screens/Home/home.module.scss'

export default function App () {
  return  (<>
            <Head>
              <title>Digital Design</title>
            </Head>
            <Section>
              <SectionTitle>Services</SectionTitle>
              <Services/>
            </Section>
            <Section>
              <SectionTitle classNameTeam={styles.title_team}>Team Components</SectionTitle>
              <Team/>
            </Section>
          </>
            )
}
