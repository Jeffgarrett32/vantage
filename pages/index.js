import Head from 'next/head'
import Image from 'next/image'
import Navlesson from '../components/Navlesson'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navlesson />
    </div>
  )
}
