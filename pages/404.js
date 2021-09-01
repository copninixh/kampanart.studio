import Head from 'next/head'
import Image from 'next/image'
import Headset from './Components/Headset'
import Mainpage from './Components/Mainpage'
import Corejs from './Components/Corejs'
import Banner from './Components/Banner'
import Footer from './Components/Footer'

export default function Custom404() {
    return (
        <div>
          <Headset />
          <body className="index-page bg-banner">
            <header className="header-2">
                    <div className="page-header min-vh-100" >
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-7 text-center mx-auto">
                            <h1 className="text-white pt-3 mt-n5 animate__animated  animate__bounceInUp"><i className="fad fa-construction"></i> 404 - Page Not Found</h1>
                            <p className="lead text-white mt-3 animate__animated animate__bounceInDown">1 September 2021 New <i className="fad fa-browser"></i> www.kampanart.studio<br /> Kampanart Chaimooltan #Dek65 Computer Engineering</p>
                            <a href="http://kampanart.studio" className="btn btn-outline-light btn-round mb-0 me-1 mt-2 mt-md-0 w-75 animate__animated animate__bounceInDown" style={{fontSize:'17px'}} >Back to homepage</a>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </header>
            <Corejs />
            
          </body>
          
         
        </div>
        
        
      )
}