import {Component} from 'react'
import Script from 'next/script'

export default class Quote extends Component {
    render (){
        return(
            <div>
                <section className="my-5 py-5">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
                        <div className="rotating-card-container">
                        <div className="card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-4">
                            <div className="front front-background">
                            <div className="card-body py-7 text-center">
                                
                                <img src="../assets/img/cop/cop.png" className="img-fluid"/>
                                <h3 className="text-white">ด้านการพัฒนาตนเอง</h3>
                           
                                
                        
                            </div>
                            </div>
                        
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ms-auto">
                        <div className="row justify-content-start">
                        <div className="col-xl-12">
                            <p className="pe-3 text-justify mb-5" style={{fontSize:"17.5px"}}>
                            &nbsp;&nbsp;&nbsp;<b>เพราะชีวิตคือ "การเรียนรู้" และ "พัฒนา"</b>
                            &nbsp;ตลอดระยะเวลาการศึกษาในระดับชั้นมัธยมศึกษาตอนปลาย (ตั้งแต่ปีการศึกษา 2562-2564)
                            ผมได้มีความมุ่งมั่นที่จะเรียนรู้เนื้อหานอกเหนือจากหลักสูตร และพัฒนาตัวเองให้เก่งขึ้นอย่างต่อเนื่อง โดยแบ่งเป็นหัวข้อต่าง ๆ ดังนี้
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="info">
                            <i className="fas fa-chalkboard fa-2x text-gradient text-primary"></i>
                            <h5 className="font-weight-bolder mt-3">การเข้าค่าย และการอบรม</h5>
                            <p className="pe-5"></p>
                            <a href="training" className="text-sm icon-move-right">รายละเอียด
                                <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true" />
                            </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info">
                            <i className="fas fa-object-group fa-2x text-gradient text-primary"></i>
                            <h5 className="font-weight-bolder mt-3">ภาวะความเป็นผู้นำ</h5>
                            <p className="pe-3"></p>
                            <a href="leadership" className="text-sm icon-move-right">รายละเอียด
                                <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true" />
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="row justify-content-start mt-5">
                        <div className="col-md-6 mt-3">
                            <i className="fas fa-laptop-code fa-2x text-gradient text-primary"></i>
                            <h5 className="font-weight-bolder mt-3">ประสบการณ์การทำงาน</h5>
                            <p className="pe-5"></p>
                            <a href="experience" className="text-sm icon-move-right">รายละเอียด
                                <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true" />
                            </a>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="info">
                            <i className="fas fa-tasks fa-2x text-gradient text-primary text-3xl"></i>
                            <h5 className="font-weight-bolder mt-3">การวิเคราะห์จุดเด่น-จุดอ่อนของตน</h5>
                            <p className="pe-3"></p>
                            <a href="swot" className="text-sm icon-move-right">รายละเอียด
                                <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                        
                 
         
                       
            </div>


        
        )
    }
        
  
    
}
  