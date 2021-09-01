import {Component} from 'react'
import Script from 'next/script'

export default class Education extends Component {
    render (){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                            <h4 className="card-title mb-5">Educaiton การศึกษา</h4>
                            <div className="hori-timeline" dir="ltr">
                                <ul className="list-inline events">
                                <li className="list-inline-item event-list">
                                    <div className="px-4">
                                    <div className="event-date bg-success w-35">Graduate</div>
                                    <div className="">
                                        <img className="img border-radius-lg rounded-circle w-50 position-relative z-index-2" src="../assets/img/school/abcm.jpg" alt="bruce" />
                                    </div>
                                    <h5 className="font-size-16">ระดับประถมศึกษา<br/>โรงเรียนอนุบาลเชียงใหม่</h5>
                                   
                                    <div>
                                        <a href="#" className="btn btn-primary btn-sm">2011-2017</a>
                                    </div>
                                    </div>
                                </li>
                                <li className="list-inline-item event-list">
                                    <div className="px-4">
                                    <div className="event-date bg-success w-35">Graduate</div>
                                    <div className="">
                                        <img className="img border-radius-lg rounded-circle w-50 position-relative z-index-2" src="../assets/img/school/yrc02.jpg" alt="bruce" />
                                    </div>
                                    <h5 className="font-size-16">ระดับมัธยมศึกษาตอนต้น<br/>โรงเรียนยุพราชวิทยาลัย</h5>
                                   
                                    <div>
                                        <a href="#" className="btn btn-primary btn-sm">2017-2019</a>
                                    </div>
                                    </div>
                                </li>
                                <li className="list-inline-item event-list">
                                    <div className="px-4">
                                    <div className="event-date bg-warning w-35">In Progress</div>
                                    <div className="">
                                        <img className="img border-radius-lg rounded-circle w-50 position-relative z-index-2" src="../assets/img/school/yrc01.jpg" alt="bruce" />
                                    </div>
                                    <h5 className="font-size-16">ระดับมัธยมศึกษาตอนปลาย<br/>โรงเรียนยุพราชวิทยาลัย</h5>
                                    
                                    <div>
                                        <a href="#" className="btn btn-primary btn-sm">IN progress</a>
                                    </div>
                                    </div>
                                </li>
                                <li className="list-inline-item event-list">
                                    <div className="px-4">
                                    <div className="event-date bg-warning w-35">Future</div>
                                    <div className="">
                                        <img className="img border-radius-lg rounded-circle w-50 position-relative z-index-2" src="../assets/img/school/dek65.jpg" alt="bruce" />
                                    </div>
                                    <h5 className="font-size-16">ระดับอุดมศึกษา<br/>#Dek 65</h5>
                          
                                    <div>
                                        <a href="#" className="btn btn-primary btn-sm">Future</a>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        {/* end card */}
                        </div>
                    </div>
                </div>

         
                       
            </div>
        
        )
    }
        
  
    
}
  