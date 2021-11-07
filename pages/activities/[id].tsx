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
              <div className="py-sm-7 py-5 bg-banner min-vh-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mx-auto mt-4">
                            <div className="row py-lg-4 py-5 mt-5 text-center">
                              <h6 className="text-white">กิจกรรม </h6>
                              <h2 className="text-white">{data.a_name}</h2>
                              <h6 className="text-white"><i className="fas fa-sitemap"></i>&nbsp;{data.a_org}</h6>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

                <div className="container">
                    <div className="row">
                      <div className="col-xl-12 bg-white" style={{minHeight:"100vh"}}>
                          <div className="d-flex justify-content-center" style={{marginTop:"-90px"}}>
                            <img src={data.a_pic} className="img-fluid w-xl-75" />
                          </div>
                          <p className="mt-5">{data.a_detail}</p>
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