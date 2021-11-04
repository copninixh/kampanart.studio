import {Component, useEffect, useRef, useState} from 'react'
import Script from 'next/script'
import { init } from "ityped";

export default function BannerCop() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["Developer", "Student", "YRC"],
        });
    },[]);
    return(
            <div>
                <div className="container" >
                    <div className="row">
                        <div className="col-12">
                            <h1 className="mb-0 text-bold text-white text-center">Copninich | <span ref={textRef}></span></h1>
                        </div>
                    </div>
                </div>
            </div>


        
        )
}
  