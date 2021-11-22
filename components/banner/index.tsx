import {Component, useEffect, useRef, useState} from 'react'
import Script from 'next/script'


import { init } from "ityped";

export default function Banner() {
  const textRef = useRef();
 
  useEffect(()=>{
      init(textRef.current,{
          showCursor:true,
          backDelay: 1500,
          backSpeed:60,
          strings: ["Kampanart"],
      });
  },[]);

    return(
            <> 
                 {/* xl - xxl */}
              <div className="bg-main vh-75 d-none d-xxl-block d-xl-block d-lg-none">
               <div className="vh-75 banner_cop ">
                 
                 <div className="container-fluid">
                   <div className="row">
                       <div className="col-xxl-4 col-lg-4">
                           <h1 className="text-white fw-bold banner-font1"><span ref={textRef}></span><br/>Chaimooltan</h1>
                           <h4 className="text-white fw-normal banner-font2">Yupparaj Wittayalai School</h4>
                           <a href="" className="btn btn-danger w-50">About Me <i className="fas fa-arrow-down"></i></a>
                       </div>
                       <div className="col-xxl-5 col-lg-5"></div>
                       <div className="col-xxl-3 col-lg-3">
                            <h1 className="text-white fw-bold banner-font3 mb-0">#dek65</h1>
                            <h4 className="text-white fw-normal banner-font4">Computer Engineering</h4>
                            <hr className="hr_banner"></hr>
                            <h5 className="text-white fw-normal banner-font5">CU | Chulalongkorn University</h5>
                       </div>
                   </div>
                   </div>
                </div>
               </div>

               {/* lg */}
               <div className="bg-main vh-75 d-none d-lg-block d-xxl-none d-xl-none d-md-none">
               <div className="vh-75 banner_cop_smart_phone">
                 <div className="container-fluid">
                   <div className="row">
                       <div className="col-md-4">
                           <h1 className="text-white fw-bold banner-font1">Kampanart<br/>Chaimooltan</h1>
                           <h4 className="text-white fw-normal banner-font2">Yupparaj Wittayalai School</h4>
                           <a href="" className="btn btn-danger">About Me <i className="fas fa-arrow-down"></i></a>
                       </div>
                       <div className="col-md-4"></div>
                       <div className="col-md-4">
                            <h1 className="text-white fw-bold banner-font3 mb-0">#dek65</h1>
                            <h4 className="text-white fw-normal banner-font4">Computer Engineering</h4>
                            <hr className="hr_banner"></hr>
                            <h5 className="text-white fw-normal banner-font5">CU | Chulalongkorn University</h5>
                       </div>
                   </div>
                   
                </div>
               </div>
               </div>

               
                {/* md */}
            <div className="bg-main vh-75 d-none d-md-block d-xxl-none d-xl-none d-lg-none">
               <div className="vh-75 banner_cop_smart_phone">
                 <div className="container-fluid">
                   <div className="row">
                       <div className="col-md-4">
                           <h1 className="text-white fw-bold banner-font1">Kampanart<br/>Chaimooltan</h1>
                           <h4 className="text-white fw-normal banner-font2">Yupparaj Wittayalai School</h4>
                           <a href="" className="btn btn-danger">About Me <i className="fas fa-arrow-down"></i></a>
                       </div>
                       <div className="col-md-4"></div>
                       <div className="col-md-4">
                            <h1 className="text-white fw-bold banner-font3 mb-0">#dek65</h1>
                            <h4 className="text-white fw-normal banner-font4">Computer Engineering</h4>
                            <hr className="hr_banner"></hr>
                            <h5 className="text-white fw-normal banner-font5">CU | Chulalongkorn University</h5>
                       </div>
                   </div>
                   
                </div>
               </div>
               </div>

                {/* Smart phone (sm) */}
                <div className="bg-main vh-75 d-xxl-none d-xl-none d-lg-none d-md-none">
                    <div className="vh-75 banner_cop_smart_phone">
                        
                    </div>
               </div>
            </>


        
        )
    
        
  
    
}
  