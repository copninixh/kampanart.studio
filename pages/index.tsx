import Skeleton from 'react-loading-skeleton'
import Headset from '../components/Headset'
import Navbar from '@/components/navbar'
import AwardPage from '@/components/awards'
import Banner from '@/components/banner'
import Quote from '@/components/quote'
import Education from '@/components/education'
import Github from '@/components/github'
import Medium from '@/components/medium'
import Journey from '@/components/journey'
import Recommendation from '@/components/recommend'
import Footer from '@/components/footer'
import Corejs from '../components/Corejs'
import { useAwards } from '@/lib/swr-hooks'

export default function IndexPage() {
  const { awards , isLoading} = useAwards()

  if (isLoading) {
    return (
      <div>


      </div>
    )
  }

  return (
    <div>
      <Headset />
      <body className="index-page" style={{backgroundColor:"#f3f4f6"}}>
        <Navbar />
        <Banner />
        <div className="contrainer-fluid page-gin-top">
              <Quote />
              <Education />
              <Github/>
              <Medium/>
              <Journey/>
              <AwardPage awards={awards} />
              <Recommendation/>    
        </div>
        <Footer />
        <Corejs />
      </body>
    </div>
  )
}
