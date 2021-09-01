import Head from 'next/head'
import Image from 'next/image'
import Headset from './Components/Headset'
import Mainpage from './Components/Mainpage'
import Corejs from './Components/Corejs'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Education from './Components/Education'
import Quote from './Components/Quote'

export default function Home() {
  return (
    <div>
      <Headset />
      <body className="index-page">
        <Mainpage />
        <Banner />
        <Quote />
        <Education />
        <Footer />
        <Corejs />
        
      </body>
      
     
    </div>
    
    
  )
}
