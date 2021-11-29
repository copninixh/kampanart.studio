import { useRouter } from 'next/router'
import { useActivities } from '@/lib/swr-hooks'
import ReactLoading from 'react-loading';
import Headset from '../../components/Headset'
import Corejs from '../../components/Corejs'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'


export default function EditEntryPage() {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useActivities(id)

  if (data) {
    return (
      <div>
        <Headset />
        <body className="index-page" style={{backgroundColor:"#f3f4f6"}}>
            <Navbar/>
            <div>
            <div className="py-5 bg-main bg-text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row text-center">
                                  <h6 className="text-white f1 fw-bold">กิจกรรม </h6>
                                  <h2 className="text-white f3" style={{fontSize:"41px"}}>{data.a_name}</h2>
                                  <h6 className="text-white f1 fw-bold" style={{fontSize:"17px"}}><i className="fas fa-sitemap"></i>&nbsp;{data.a_org}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

           

                <div className="container">
                    <div className="row">
                      <div className="col-xl-12 bg-white" style={{minHeight:"100vh"}}>
                          <div className="d-flex justify-content-center" style={{marginTop:"-90px"}}>
                            <img src={data.a_pic} className="img-fluid img-detail-page" />
                          </div>
                          <p className="mt-5 f1">{data.a_detail}</p>
                      </div>    
                    </div>
                    
                </div>
                       
            </div>
            <Footer />
            <Corejs />
        </body>
      </div>
    )
  } else {
    return (
    <body className="index-page">
      <div className="load-cen">
        <ReactLoading type={'cylon'} color={'#da5f8e'} height={120} width={120} className="load-cen" />
      </div>
    </body>
    )
  }
}