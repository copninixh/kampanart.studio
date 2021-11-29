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
        <body className="index-page" style={{backgroundColor:"#f3f4f6"}}>
            <Navbar/>
            <div>
            <div className="py-5 bg-main bg-text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row text-center">
                                <h6 className="text-white fw-bold f1">เกียรติบัตร Certificatre</h6>
                                <h2 className="text-white f3" style={{fontSize:"41px"}}>{data.c_name}</h2>
                                <h6 className="text-white fw-bold f1"><i className="fas fa-sitemap"></i> {data.c_org}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

         


                <div className="container-fluid">
                    <div className="row">
                      
                      <div className="col-xl-12 mt-20">
                        <h3 className="text-center"></h3>

                          <div className="d-flex justify-content-center">
                            <hr className="s-hr3 s-hr-color mb-5" />
                          </div>
                          <div className="d-flex justify-content-center">
                            <img src={data.c_pic} className="img-fluid img-detail-page" />
                          </div>
                          
                        <p className="f1">{data.c_detail}</p>
                
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