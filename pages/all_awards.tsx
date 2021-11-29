import Skeleton from 'react-loading-skeleton'
import Headset from '../components/Headset'
import Navbar from '@/components/navbar'
import AwardAllPage from '@/components/awardsall'

import Banner from '@/components/banner'


import Footer from '@/components/footer'
import Corejs from '../components/Corejs'
import { useAwardsAll } from '@/lib/swr-hooks'
import ReactLoading from 'react-loading';


export default function AllAwardsPage() {
  const { awardsall , isLoading} = useAwardsAll()


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
        <div>
        <div className="banner-certificate-page">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="row text-center">
                    <p className="text-white f3 mb-0 text-banner-award-1">ผลงานและรางวัลเชิงวิชาการที่โดดเด่น</p>
                    <p className="text-white text-awards f3 mb-0 text-award-banner-2">Awards รางวัล</p>
                    <p className="text-white f3 mb-0 text-banner-award-3">ตั้งแต่ระดับชั้นมัธยมศึกษาปีที่ 4 ถึง ชั้นมัธยมศึกษาปีที่ 6 (ปีการศึกษา 2562-2564)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="contrainer-fluid py-4">    
            <AwardAllPage awardsall={awardsall} />
          </div>
        </div>
        <Footer />
        <Corejs />
      </body>
    </div>
  )
}
