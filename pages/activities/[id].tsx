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
        <body className="index-page" style={{backgroundColor:"white"}}>
            <Navbar/>
            <div className="contrainer mt-20">
        
                <div className="col-lg-12">
                  <h3 className="text-center">{data.a_name}</h3>

                  <div className="d-flex justify-content-center">
                    <hr className="s-hr3 s-hr-color mb-5" />
                    <img src={data.a_pic} className="img-fluid" />
                  </div>
                  <p>{data.a_detail}</p>
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