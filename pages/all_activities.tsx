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
        <Headset />
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
          <div className="py-sm-7 py-5 bg-banner min-vh-50">
            <div className="container">
              <div className="row">
                <div className="col-12 mx-auto mt-4">
                  <div className="row py-lg-4 py-5 mt-5 text-center">
                    <h6 className="text-white"></h6>
                    <h2 className="text-white"><i className="fas fa-map-marker-edit"></i> Activity กิจกรรม</h2>
                    <p className="lead text-white">ตั้งแต่ระดับชั้นมัธยมศึกษาปีที่ 4 ถึง ชั้นมัธยมศึกษาปีที่ 6 (ปีการศึกษา 2562-2564)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contrainer-fluid page-gin-top">
            <Activityallpage activityall={activityall} />
          </div>
        </div>
        <Footer />
        <Corejs />
      </body>
    </div>
  )
}
