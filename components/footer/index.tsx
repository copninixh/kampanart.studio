import {Component} from 'react'
import Script from 'next/script'

export default class Footer extends Component {
    render (){
        return(
            <>
                <div className="container mt-12">
                    <div className="row">
                        <div className="col-xxl-12">
                            <p className="text-quote">เพราะความฝันของผมคือ การสร้างเทคโนโลยี
                            <br/>
                            ที่สร้างความเปลี่ยนแปลงและมี effect ที่ดีให้กับสังคมได้
                            </p>
                            <img src="../assets/img/cop/03.png" className="img-fluid img-center img-signature mb-5"/>

                        </div>
                    </div>
                </div>

                <div className="container footer-upper">
                    <div className="row">
                        <div className="col-xxl-12 py-3">
                            <div className="row">
                                <div className="col-xxl-2 col-md-2">
                                    <p className="text-footer-upper fw-bold text-center">contact</p>
                                </div>
                                <div className="col-xxl-10 col-md-10">
                                    <p className="text-footer-upper"><a href="">Copninich</a> | Kampanart Chaimooltan | Kampanart Chaimooltan
                                    <br/>
                                    copninich_ | devkampanart.ch@gmail.com
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <footer className="footer py-4 position-relative overflow-hidden">
               
                    <div className="container">
                        <div className="row">
                            <h6 className="text-md text-center text-footer text-white mb-0">
                                © 2021 <span className="f-pink">Copninich</span> All rights reserved
                            </h6>
                            
                        </div>
                    </div>
                </footer>
         
                       
            </>


        
        )
    }
        
  
    
}
  