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
      <div>
        <Headset />
        <body className="index-page" style={{backgroundColor:"white"}}>
            <Navbar/>
            <div>
                <div className="container">
                    <div className="row">
                      <div className="col-xl-12 mt-20">
                        <div className="row">
                          <div className="col-xl-12 text-center">
                            <img src={data.a_pic} className="img border-radius-lg rounded-circle img-fluid max-width-200" />
                            <h4 className="mt-3 text-gradient text-primary ">{data.a_name}</h4>
                            <h6>{data.a_status}</h6>
                            <h6>{data.a_position}</h6>
                          </div>
                          <div className="col-xl-6">
                            <img src={data.a_recommend} className="img-fluid w-100" />
                          </div>
                          <div className="col-xl-6 mt-xl-5">
                            <p className="text-justify mt-xl-5">{data.a_detail}</p>
                          </div>
                        </div>
                        
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