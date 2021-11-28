import {Component, useEffect, useState} from 'react'
import Script from 'next/script'
import Image from 'next/image';
import Cop from 'public/assets/img/cop/cop.png';

    



export default function Aboutme()  {
    
 

    
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/copninich/repos')
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    
        
      
 
        return(
            <>
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-12">
                        <h4 className="f2 f-pink fw-bold mt-5 f-header">About ME</h4>
                    </div>
                    
                    <div className="col-xl-3 col-lg-4 col-md-5 animate__animated animate__fadeInLeft">
                        <div className="nav flex-column nav-pills shadow-box" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active border-none f-menu-copninich" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><i className="fas fa-user icon-banner"></i>&nbsp;&nbsp;&nbsp;รู้จักกัมปนาท</button>
                            <button className="nav-link border-none f-menu-copninich" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i className="fas fa-school icon-banner"></i>&nbsp;&nbsp;ประวัติการศึกษา</button>
                            <button className="nav-link border-none f-menu-copninich" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i className="fas fa-code icon-banner"></i>&nbsp;&nbsp;การทำงาน</button>
                            <button className="nav-link border-none f-menu-copninich" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i className="fab fa-github icon-banner"></i>&nbsp;&nbsp;&nbsp;GitHub</button>
                            <button className="nav-link border-none f-menu-copninich" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="false"><i className="fas fa-user-circle icon-banner"></i>&nbsp;&nbsp;&nbsp;ติดต่อกัมปนาท</button>
                        </div>
                    </div>

                    <div className="col-xl-9 col-lg-8 col-md-7 animate__animated animate__fadeInRight">
                        <div className="tab-content mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-12">
                                        {/* <img src="../assets/img/cop/cop.png" className="img-fluid w-100" /> */}
                                        <Image
                                            src={Cop}
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-12">
                                        <h3 className="text-aboutme mt-5 mb-0">นายกัมปนาท ชัยมูลฐาน</h3>
                                        <h4 className="text-aboutme2">Kampanart Chaimooltan</h4>
                                        <hr></hr>
                                        <h5 className="f1 fw-600">ข้อมูลส่วนตัว</h5>
                                        <p className="f1">ชื่อเล่น : คอป <br/>วันเกิด : 27 มีนาคม พ.ศ. 2564<br/>คติประจำใจ : ไม่ฝึกก็ไม่มีวันทำได้ ไม่ขวนขวายก็ไม่มีวันสำเร็จ, ทุก Bug คือการเรียนรู้</p>
                                        <h5 className="f1 fw-600">ข้อมูลศึกษา</h5>
                                        <p className="f1">นักเรียนชั้นมัธยมศึกษาปีที่ 6 <br/>โรงเรียนยุพราชวิทยาลัย จังหวัดเชียงใหม่ <br/>แผนการเรียน พสวท.สมทบ (สายวิทย์) GPAX 3.44</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                               
                                <section className="timeline_area section_padding_130">
                                <div className="container">
                                    <div className="row justify-content-center">
                                    <div className="col-12 col-sm-8 col-lg-6">
                                        <div className="section_heading text-center">
                                        
                                        <div className="line" />
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-12">
                                        <div className="apland-timeline-area">
                                        <div className="single-timeline-area">
                                            <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                                            <p className="f1">ระดับชั้นประถมศึกษา</p>
                                            </div>
                                            <div className="row">
                                            <div className="col-12 col-md-12 col-xl-12">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
                                                
                                                <div className="timeline-text">
                                                    <h6 className="f-education">โรงเรียนอนุบาลเชียงใหม่</h6>
                                                    <p className="f-education-detail">Anubaan Chiang Mai School</p>
                                                </div>
                                                </div>
                                            </div>
                                    
                                          
                                            </div>
                                        </div>
                                        
                                        <div className="single-timeline-area">
                                            <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                                            <p className="f1">ระดับชั้นมัธยมศึกษาตอนต้น</p>
                                            </div>
                                            <div className="row">
                                            <div className="col-12 col-md-12 col-xl-12">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
                                               
                                                <div className="timeline-text">
                                                    <h6 className="f-education">โรงเรียนยุพราชวิทยาลัย (GPAX : 3.55 )</h6>
                                                    <p className="f-education-detail">Yupparaj Wittayalai School</p>
                                                    <p className="f-education-detail">ห้องเรียนโครงการพิเศษ Smart YRC </p>
                                                </div>
                                                </div>
                                            </div>
                                     
                                            </div>
                                        </div>
                                        
                                        <div className="single-timeline-area">
                                            <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
                                            <p className="f1">ระดับชั้นมัธยมศึกษาตอนปลาย</p>
                                            </div>
                                            <div className="row">
                                            <div className="col-12 col-md-12 col-xl-12">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
                                               
                                                <div className="timeline-text">
                                                    <h6 className="f-education">โรงเรียนยุพราชวิทยาลัย (GPAX 5 Semester : 3.55 )</h6>
                                                    <p className="f-education-detail">Yupparaj Wittayalai School</p>
                                                    <p className="f-education-detail">ห้องเรียนโครงการพิเศษ พสวท.สมทบ</p>
                                                </div>
                                                </div>
                                            </div>
                                          
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </section>


                            

                            </div>
                            <div className="tab-pane fade  mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <div className="col-xl-12">
                                        <div className="row">
                                            <h4 className="card-title fw-600 f2">Personal work</h4>
                                        </div>
                                    </div>
                                   
                                       
                                    <div className="col-xl-12 mb-2">
                                        <div className="none-border bg-white">
                                            <div className="card-body">
                                                <div className="row">
                                                
                                                    <div className="col-xxl-12">
                                                            <h5 className="card-title fw-600 mt-2 f2">ThaiHooOCR</h5>
                                                            <p className="card-text f2">Developer <br/><i className="fab fa-github"></i> GitHub :  <a href="https://www.github.com/YRCTECH" className="f-link">ThaiHooOCR</a></p>
                                                    </div>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12 mt-3">
                                        <div className="row">
                                            <h4 className="card-title fw-600 f2">School work</h4>
                                        </div>
                                    </div>

                                    <div className="col-xl-12 mb-2">
                                        <div className="none-border bg-white" >
                                            <div className="card-body">
                                                <div className="row">
                                                    
                                                    <div className="col-xxl-12">
                                                            <h5 className="card-title fw-600 mt-2 f2">Youth Computer YRC (GEN 7 - 10)</h5>
                                                            <p className="card-text f2">Leader (Gen 9), Mentor & Staff, Member</p>
                                                    </div>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12 mb-2">
                                        <div className="none-border bg-white" >
                                            <div className="card-body">
                                                <div className="row">
                                            
                                                    <div className="col-xxl-12">
                                                        <h5 className="card-title fw-600 mt-2 f2">YRC TECH</h5>
                                                        <p className="card-text f2">Developer & Administrator | 5 Semester <br/> <i className="fab fa-github"></i> GitHub : <a href="https://www.github.com/YRCTECH" className="f-link">YRC TECH</a></p>
                                                    </div>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12 mb-5">
                                        <div className="none-border bg-white" >
                                            <div className="card-body">
                                                <div className="row">
                                            
                                                    <div className="col-xxl-12">
                                                        <h5 className="card-title fw-600 mt-2 f2">YRC Grapic & Media</h5>
                                                        <p className="card-text f2">Student volunteer (Graphic & Editor) | 5 Semester</p>
                                                    </div>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                            
                            </div>
                            <div className="tab-pane fade  mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                {/* <h4 className="card-title f2 mb-3 fw-600 f-pink" >GitHub</h4> */}
                                <h4 className="card-title f2 mb-3 fw-600" ><i className="fab fa-github"></i> copninich (Personal GitHub) and contributor <i className="fab fa-github"></i> YRC TECH</h4>

                                {/* <hr className="s-hr s-hr-color mb-3" /> */}
                                {data.slice(0, 40).sort().reverse().map((item) => (
                                    
                                    <a key={item.id} href={item.svn_url} className="f2"> <i className="far fa-code-branch"></i> {item.name} <br/></a>
                                    
                                
                                ))}
                            </div>
                            <div className="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab">
                                <h3 className="text-aboutme  mb-0">ติดต่อ กัมปนาท</h3>
                                <h4 className="text-aboutme2">Contact Me</h4>
                                <hr></hr>
                                <h5 className="f2 mb-3">Working Platform Contact</h5>
                                <p className="f2"><i className="fas fa-envelope"></i> Email : <a href="mailto:devkampanart.ch@gmail.com" className="f-pink fw-bold">devkampanart.ch@gmail.com</a></p>
                                <p className="f2"><i className="fab fa-github"></i> GitHub : <a href="https://github.com/copninich" className="f-pink fw-bold">copninich</a></p>
                                <p className="f2"><i className="fab fa-kaggle"></i> Kaggle : <a href="https://www.kaggle.com/copninich" className="f-pink fw-bold">copninich</a></p>
                                <p className="f2"><i className="fab fa-medium"></i> Medium : <a href="https://medium.com/@copninich" className="f-pink fw-bold">Kampanart Chaimooltan</a></p>
                                <p className="f2"><i className="fab fa-linkedin"></i> Linkedin : <a href="https://www.linkedin.com/in/kampanart-chaimooltan-81705421a/" className="f-pink fw-bold">Kampanart Chaimooltan</a></p>
                                <h5 className="f2 mt-4 mb-3">Social Media Contact</h5>
                                <p className="f2"><i className="fab fa-facebook"></i> Facebook : <a href="https://facebook.com/devcop.kmrt" className="f-pink fw-bold">Kampanart Chaimooltan</a></p>
                                <p className="f2"><i className="fab fa-instagram"></i> Instagram : <a href="https://www.instagram.com/copninich_/" className="f-pink fw-bold">copninich_</a></p>
                                <p className="f2"><i className="fab fa-discord"></i> Discord : <a href="#" className="f-pink fw-bold">Copninich #3758</a></p>
                                <p className="f2"><i className="fab fa-line"></i> Line ID : <a href="#" className="f-pink fw-bold">kampanart.cop</a></p>
                            </div>
                        </div>
                    </div>
                        
                    
                </div>
            </div>
                
               
                        
                 
                 
            </>


        
        )
    
        
  
    
}
  