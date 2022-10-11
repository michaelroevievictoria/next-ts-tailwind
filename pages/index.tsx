import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReduxTestRun from '../components/Dashboard/ReduxTestRun'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ReduxTestRun />
    </div>
  )
}

export default Home
