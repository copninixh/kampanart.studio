import { useRouter } from 'next/router'
import { useCerti } from '@/lib/swr-hooks'
import ReactLoading from 'react-loading';
import Headset from '../../components/Headset'
import Corejs from '../../components/Corejs'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'


export default function EditEntryPage() {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useCerti(id)

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
                        <h3 className="text-center">{data.c_name}</h3>

                          <div className="d-flex justify-content-center">
                            <hr className="s-hr3 s-hr-color mb-5" />
                          </div>
                          <div className="d-flex justify-content-center">
                            <img src={data.c_pic} className="img-fluid w-xl-50" />
                          </div>
                          
                        <p>{data.c_detail}</p>
                
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