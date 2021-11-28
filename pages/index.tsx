import Headset from '../components/Headset'
import Navbar from '@/components/navbar'
import AppreciationPage from '@/components/appreciation'
import Banner from '@/components/banner'
import Portfolio from '@/components/portfolio'
import Aboutme from '@/components/aboutme'
import Selfdev from '@/components/SelfDevelopment'
import Footer from '@/components/footer'
import Corejs from '../components/Corejs'
import ReactLoading from 'react-loading';
import { useAppreciation} from '@/lib/swr-hooks';
import Status from '@/components/status';


export default function IndexPage() {

  const { appre } = useAppreciation()

  // if (isLoading) {

  //   return (
  //     <div>
       
  //       <body className="index-page" style={{backgroundColor:"#da5f8e"}}>
  //         <div className="load-cen">
  //           <ReactLoading type={'cylon'} color={'#fff'} height={120} width={120} className="load-cen" />
  //         </div>
  //       </body>
  //     </div>
  //   )
  // }

  return (
    <>
      <Headset />
      <body className="index-page" style={{backgroundColor:"#f3f4f6"}}>
        <Navbar />
        <Banner />
        <Status/>
        <Aboutme/>
        
        <div className="contrainer-fluid page-gin-top">
             
            
          <AppreciationPage appre={appre} />
              <Portfolio/>
         
              {/* 
            
              
               */}
              
              <Selfdev/>
        </div>
        <Footer />
        <Corejs />
      </body>
    </>
  )
}
