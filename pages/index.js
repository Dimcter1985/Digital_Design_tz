import Head from 'next/head';
import Services from '../components/services/Services';
import Team from '../components/team/Team';

export default function App () {
  return  (<>
            <Head>
              <title>Digital Design</title>
            </Head>
            <Services />
            <Team />
          </>
            )
}
