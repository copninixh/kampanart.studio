import {Component} from 'react'
import Script from 'next/script'

export default class Quote extends Component {
    render (){
        return(
            <>
         

            <div className="parallax">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <p className="text-parallax">
                                เพราะชีวิตคือ "การเรียนรู้" และ "พัฒนา" ตลอดระยะเวลาการศึกษาในระดับชั้นมัธยมศึกษาตอนปลาย
                                <br/>
                                (ตั้งแต่ปีการศึกษา 2562-2564) ผมได้มีความมุ่งมั่นที่จะเรียนรู้เนื้อหานอกเหนือจากหลักสูตร
                                <br/>
                                และพัฒนาตัวเองให้เก่งขึ้นอย่างต่อเนื่อง โดยแบ่งเป็นหัวข้อต่าง ๆ ดังนี้
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-12 mb-5">
                <div className="row">
                    <div className="col-xxl-7 col-md-12 align-self-center">
                        <div className="container">
                            <div className="row">
                                
                                <div className="col-xxl-6 col-md-12">
                                    <div className="card py-4 card-self">
                                        <div className="card-body text-center">
                                            <i className="fas fa-chalkboard fa-2x f-pink"></i>
                                            <h4 className="text-self-header">การเข้าค่ายและการอบรม</h4>
                                            <p className="text-self-detail">การศึกษาเรียนรู้ด้วยตนเองและต่อเนื่อง</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-6 col-md-12">
                                    <div className="card py-4 card-self">
                                        <div className="card-body text-center">
                                            <i className="far fa-user-chart fa-2x f-pink"></i>
                                            <h4 className="text-self-header">ภาวะความเป็นผู้นำ</h4>
                                            <p className="text-self-detail">ความริเริ่มสร้างสรรค์และการทำงานเป็นกลุ่ม</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-6 col-md-12">
                                    <div className="card py-4 card-self">
                                        <div className="card-body text-center">
                                            <i className="fas fa-object-group fa-2x f-pink"></i>
                                            <h4 className="text-self-header">ประสบการณ์การทำงาน</h4>
                                            <p className="text-self-detail">ความสามารถในการแก้ไขปัญหาและผลการดำเนินงาน</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-6 col-md-12">
                                    <div className="card py-4 card-self">
                                        <div className="card-body text-center">
                                            <i className="far fa-clipboard-list-check fa-2x f-pink"></i>
                                            <h4 className="text-self-header">จุดแข็งจุดอ่อนของตน</h4>
                                            <p className="text-self-detail">การวิเคราะห์จุดแข็ง และจุดอ่อน ศักยภาพที่ต้องพัฒนาเพิ่ม</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-5 col-md-12">
                        <img src="../assets/img/cop/cop_self.jpg" className="img-fluid w-100"></img>
                    </div>
                </div>
            </div>
                 
         
                       
            </>


        
        )
    }
        
  
    
}
  