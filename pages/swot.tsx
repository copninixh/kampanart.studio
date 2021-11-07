import Skeleton from 'react-loading-skeleton'
import Headset from '../components/Headset'
import Navbar from '@/components/navbar'
import Swot from '@/components/swot'

import Banner from '@/components/banner'


import Footer from '@/components/footer'
import Corejs from '../components/Corejs'
import { useActivtyAll } from '@/lib/swr-hooks'
import ReactLoading from 'react-loading';


export default function Training() {
  const { activityall , isLoading} = useActivtyAll()


  if (isLoading) {

    return (
      <div>
        <body className="index-page" style={{backgroundColor:"#da5f8e"}}>
          <div className="load-cen">
            <ReactLoading type={'cylon'} color={'#fff'} height={120} width={120} className="load-cen" />
          </div>
        </body>
      </div>
    )
  }

  return (
    <div>
      <Headset />
      <body className="index-page" style={{backgroundColor:"#f3f4f6"}}>
        <Navbar />
  
   
        <div className="contrainer-fluid page-gin-top">
        
             <Swot/>
              
              
        </div>
        <Footer />
        <Corejs />
      </body>
    </div>
  )
}
