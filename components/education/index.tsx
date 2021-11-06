import {Component} from 'react'
import Script from 'next/script'

export default class Education extends Component {
    render (){
        return(
            <div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-5">
                   
                            <img className="img-fluid mx-auto d-flex justify-content-center flex-column w-100" src="../assets/img/cop/copninich.jpg"  />
                            <h4 className="card-title mt-5" >Educaiton การศึกษา</h4>
                            <hr className="s-hr s-hr-color mb-5" />
                            <div className="hori-timeline" dir="ltr">
                                <ul className="list-inline events">
                                <li className="list-inline-item event-list">
                                    <div className="px-4">
                                    <div className="btn btn-rounded event-date bg-success">2011-2017</div>
                                    <div className="">
                                        <img className="img border-radius-lg rounded-circle w-50 position-relative z-index-2" src="../assets/img/school/abcm.jpg" alt="bruce" />
                                    </div>
                                    <h5 className="font-size-16 mt-3">ระดับประถมศึกษา<br/>โรงเรียนอนุบาลเชียงใหม่</h5>
                                   
                                   
                                    </div>
                                </li>
                                <li className="list-inline-item event-list">
                                    <div className="px-4">
                                    <div className="btn btn-rounded event-date bg-success">2017-2019</div>
                                    <div className="">
                                        <img className="img border-radius-lg rounded-circle w-50 position-relative z-index-2" src="../assets/img/school/yrc02.jpg" alt="bruce" />
                                    </div>
                                    <h5 className="font-size-16 mt-3">ระดับมัธยมศึกษาตอนต้น<br/>โรงเรียนยุพราชวิทยาลัย</h5>
                                   
                                   
                                    </div>
                                </li>
                                <li className="list-inline-item event-list">
                                    <div className="px-4">
                                    <div className="btn btn-rounded event-date bg-danger text-white">Current</div>
                                    <div className="">
                                        <img className="img border-radius-lg rounded-circle w-50 position-relative z-index-2" src="../assets/img/school/yrc01.jpg" alt="bruce" />
                                    </div>
                                    <h5 className="font-size-16 mt-3">ระดับมัธยมศึกษาตอนปลาย<br/>โรงเรียนยุพราชวิทยาลัย</h5>
                                    
                                 
                                    </div>
                                </li>
                                <li className="list-inline-item event-list">
                                    <div className="px-4">
                                    <div className="btn btn-rounded event-date bg-warning">Future</div>
                                    <div className="">
                                        <img className="img border-radius-lg rounded-circle w-50 position-relative z-index-2" src="../assets/img/school/dek65.jpg" alt="bruce" />
                                    </div>
                                    <h5 className="font-size-16 mt-3">#Dek 65<br/>วิศวกรรมคอมพิวเตอร์</h5>
                          
                                   
                                    </div>
                                </li>
                                </ul>
                            </div>
                   
                        </div>
                    </div>
                </div>

         
                       
            </div>
        
        )
    }
        
  
    
}
  