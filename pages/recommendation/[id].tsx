import { useRouter } from 'next/router'
import { useAppre } from '@/lib/swr-hooks'
import ReactLoading from 'react-loading';
import Headset from '../../components/Headset'
import Corejs from '../../components/Corejs'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ReactDOM from 'react-dom';


export default function EditEntryPage() {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useAppre(id)


  if (data) {
    return (
      <>
        <Headset />
        <body className="index-page" style={{backgroundColor:"white"}}>
            <Navbar/>
            <div>
                <div className="bg-banner-recommend">
                  <div className="col-xl-12 text-center">
                    <img src={data.a_pic2} className="img-fluid img-teacher" />
                  </div>
                </div>

                <div className="container" style={{marginTop:"-60px"}}>
                  <div className="row">
                    <div className="col-xl-12 text-center bg-banner-recommend-name py-3">
                      <h4 className="f3 f-name-teacher">{data.a_name}</h4>
                      <h6 className="f1 f-teacher">{data.a_status}</h6>
                      <h6 className="f1 f-teacher">{data.a_position}</h6>
                    </div>
                  </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                      <div className="col-xl-12 mt-20">
                        <div className="row">
                          
                          <div className="col-xl-6">
                            <img src={data.a_recommend} className="img-fluid img-detail-page" />
                          </div>
                          <div className="col-xl-6 mt-xl-5">
                            <div className="f1" dangerouslySetInnerHTML={{ __html: data.a_detail }}></div>
                          </div>
                        </div>
                        
                      </div>
                        
                        
                        
                    </div>
                    
                </div>
                       
            </div>

            <Footer />
            <Corejs />
        </body>
      </>
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