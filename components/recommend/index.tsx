import {Component} from 'react'
import Script from 'next/script'

export default class Recommendation extends Component {
    
    render (){
        
        return(
            <div>
                <div className="container ">
                    <div className="row">
                        <h4 className="card-title mt-5 text-center" >Appreciation คำนิยม</h4>
                
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                    <a href="javascript:;" className="d-block">
                                    <img src="../assets/img/teacher/kru2.jpg" className="img-fluid border-radius-lg" />
                                    </a>
                                </div>
                                <div className="card-body pt-2">
                                    <span className="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2 f1">Teacher adviser ครูที่ปรึกษา</span>
                                    <a href="javascript:;" className="card-title h5 d-block text-darker f1">
                                    ครูปณวรรต บุญตาศานย์
                                    </a>
                                    <p className="card-description mb-4">
                                        หัวหน้ากลุ่มสาระกลุ่มงานเทคโนโลยี <br/> วิทยฐานะ : ชำนาญการ 
                                    </p>
                                    <a href="#" className="btn btn-primary btn-rounded f1 f-15">อ่านคำนิยม</a>
                                    
                                </div>
                            </div>

                        </div>

                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                    <a href="javascript:;" className="d-block">
                                    <img src="../assets/img/teacher/kru1.jpg" className="img-fluid border-radius-lg" />
                                    </a>
                                </div>
                                <div className="card-body pt-2">
                                    <span className="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2 f1">Teacher adviser ครูที่ปรึกษา</span>
                                    <a href="javascript:;" className="card-title h5 d-block text-darker f1">
                                        ครูวิรัชชัย จันต๊ะวงศ์
                                    </a>
                                    <p className="card-description mb-4">
                                       งานพัฒนาระบบเว็บไซต์และเครือข่ายฯ<br/> วิทยฐานะ : ชำนาญการ 
                                    </p>
                                        <a href="#" className="btn btn-primary btn-rounded f1 f-15">อ่านคำนิยม</a>
                                    
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                    <a href="javascript:;" className="d-block">
                                    <img src="./assets/img/kit/pro/anastasia.jpg" className="img-fluid border-radius-lg" />
                                    </a>
                                </div>
                                <div className="card-body pt-2">
                                    <span className="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2 f1">Teacher adviser ครูที่ปรึกษา</span>
                                    <a href="javascript:;" className="card-title h5 d-block text-darker f1">
                                        แม่นภัส?
                                    </a>
                                    <p className="card-description mb-4">
                                        ครูที่ปรึกษา <br/> วิทยฐานะ : ชำนาญการพิเศษ
                                        <br/>
                                        <br/>
                                    </p>
                                    <a href="#" className="btn btn-primary btn-rounded f1 f-15">อ่านคำนิยม</a>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                    <a href="javascript:;" className="d-block">
                                    <img src="./assets/img/kit/pro/anastasia.jpg" className="img-fluid border-radius-lg" />
                                    </a>
                                </div>
                                <div className="card-body pt-2">
                                    <span className="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2 f1">Teacher adviser ครูที่ปรึกษา</span>
                                    <a href="javascript:;" className="card-title h5 d-block text-darker f1">
                                        คร______ _______
                                    </a>
                                    <p className="card-description mb-4">
                                        ครู_____<br/> วิทยฐานะ : ______ 
                                        <br/>
                                        <br/>
                                    </p>
                                        <a href="#" className="btn btn-primary btn-rounded f1 f-15">อ่านคำนิยม</a>
                                    
                                </div>
                            </div>
                        </div> */}


                    </div>
                </div>
         
                       
            </div>


        
        )
    }
        
  
    
}
  