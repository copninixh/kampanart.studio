import Skeleton from 'react-loading-skeleton'
import Headset from '../components/Headset'
import Navbar from '@/components/navbar'
import CerallPage from '@/components/certificateall'

import Banner from '@/components/banner'


import Footer from '@/components/footer'
import Corejs from '../components/Corejs'
import { useCertificateAll } from '@/lib/swr-hooks'
import ReactLoading from 'react-loading';


export default function AllCertificatePage() {
  const { cerall , isLoading} = useCertificateAll()


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
          <div className="py-sm-7 py-5 bg-banner min-vh-50">
            <div className="container">
              <div className="row">
                <div className="col-12 mx-auto mt-4">
                  <div className="row py-lg-4 py-5 mt-5 text-center">
                    <h6 className="text-white"></h6>
                    <h2 className="text-white f3"><i className="fas fa-file-certificate"></i> Certificate เกียรติบัตร</h2>
                    <p className="lead text-white f1 fw-bold">ตั้งแต่ระดับชั้นมัธยมศึกษาปีที่ 4 ถึง ชั้นมัธยมศึกษาปีที่ 6 (ปีการศึกษา 2562-2564)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="contrainer-fluid page-gin-top">
            <CerallPage cerall={cerall} /> 
          </div>
        </div>
        <Footer />
        <Corejs />
      </body>
    </div>
  )
}
