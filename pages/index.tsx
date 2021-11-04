import Skeleton from 'react-loading-skeleton'

import Entries from '@/components/entries'
import AwardPage from '@/components/awards'
import Headset from '../components/Headset'
import Mainpage from '../components/Mainpage'
import Corejs from '../components/Corejs'
import Banner2 from '../components/Banner2'
import BannerCop from '../components/BannerCop'
import Footer from '../components/Footer'
import Education from '../components/Education'
import Quote from '../components/Quote'
import Github from '../components/Github'
import Medium from '../components/Medium'
import Journey from '../components/Journey'
import Recommendation from '../components/Recommendation'



import { useEntries , useAwards } from '@/lib/swr-hooks'

export default function IndexPage() {
  const { entries, isLoading } = useEntries()
  const { awards } = useAwards()

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
        <Mainpage />
        
        <Banner2 />

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
