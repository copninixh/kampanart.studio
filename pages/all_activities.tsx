import Skeleton from 'react-loading-skeleton'
import Headset from '../components/Headset'
import Navbar from '@/components/navbar'
import Activityallpage from '@/components/activityall'

import Banner from '@/components/banner'


import Footer from '@/components/footer'
import Corejs from '../components/Corejs'
import { useActivtyAll } from '@/lib/swr-hooks'
import ReactLoading from 'react-loading';


export default function AllAwardsPage() {
  const { activityall , isLoading} = useActivtyAll()


  if (isLoading) {

    return (
      <div>
     
        <body className="index-page">
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
          <div className="py-sm-7 py-5 banner-activity-page">
            <div className="container">
              <div className="row">
                <div className="col-12 mx-auto">
                  <div className="row text-center">
                    <h2 className="text-white f3" style={{fontSize:"41px"}}><i className="fas fa-map-marker-edit"></i> Activity กิจกรรม</h2>
                    <p className="lead text-white f1 fw-bold">ตั้งแต่ระดับชั้นมัธยมศึกษาปีที่ 4 ถึง ชั้นมัธยมศึกษาปีที่ 6 (ปีการศึกษา 2562-2564)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contrainer-fluid page-gin-top ">
            <Activityallpage  activityall={activityall} />
          </div>
        </div>
        <Footer />
        <Corejs />
      </body>
    </div>
  )
}
