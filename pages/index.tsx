import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Page } from '../components/Page'

const demoProps = {
  user: {},
  onLogin: () => {},
  onLogout: () => {},
  onCreateAccount: () => {},
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Including demo props here for example */}
      <Page {...demoProps} />
    </div>
  )
}
