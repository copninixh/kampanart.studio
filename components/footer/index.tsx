import {Component} from 'react'
import Script from 'next/script'

export default class Footer extends Component {
    render (){
        return(
            <>
                <div className="container mt-12">
                    <div className="row">
                        <div className="col-xxl-12">
                            <p className="text-quote">เพราะความฝันของผมคือ การสร้างเทคโนโลยี นวัตกรรม 
                            <br/>
                            ที่สร้างความเปลี่ยนแปลงและมี effect ที่ดีให้กับสังคมได้
                            </p>
                            <img src="../assets/img/cop/03.png" className="img-fluid img-center img-signature mb-5"/>

                        </div>
                    </div>
                </div>

                <div className="container footer-upper d-none d-md-block d-xxl-block d-xl-block d-lg-block">
                    <div className="row">
                        <div className="col-xxl-12 py-3">
                            <div className="row">
                                <div className="col-xxl-2 col-md-2">
                                    <p className="text-footer-upper fw-bold text-center">contact</p>
                                </div>
                                <div className="col-xxl-10 col-md-10">
                                    <p className="text-footer-upper"><a href="" className="text-white"><i className="fab fa-github"></i> Copninich</a> | <a href="" className="text-white"><i className="fab fa-medium"></i> Kampanart Chaimooltan</a> | <a href="" className="text-white"><i className="fab fa-facebook"></i> Kampanart Chaimooltan</a>
                                    <br/>
                                    <a href="" className="text-white"><i className="fab fa-instagram"></i> copninich_  </a>| <a href="" className="text-white"><i className="fas fa-envelope"></i> devkampanart.ch@gmail.com</a>
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
  