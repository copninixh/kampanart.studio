import {Component} from 'react'
import Script from 'next/script'

export default class Banner extends Component {
    render (){
        return(
            <div>
                <section className="py-sm-7 mt-5 py-5 position-relative bg-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mx-auto">
                                    <div className="row py-lg-4 py-5">
                                        <div className="col-lg-3 col-md-5 position-relative my-auto">
                                            <img className="img border-radius-lg rounded-circle max-width-200 w-100 position-relative z-index-2" src="../assets/img/cop/02.jpg" alt="bruce" />
                                        </div>
                                        <div className="col-lg-9 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mt-sm-0 mt-4">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <h4 className="mb-0 text-bold text-white">Copnininich</h4>
                                                <div className="d-block">
                                                    <button type="button" className="btn btn-sm btn-outline-light  btn-round text-nowrap mb-0">Follow</button>
                                                </div>
                                            </div>

                                            <div className="row mb-4">
                                                <div className="col-auto">
                                                    <span className="h6">323 </span>
                                                    <span className="text-white">Posts</span>
                                                </div>
                                                <div className="col-auto">
                                                    <span className="h6">3.5k </span>
                                                    <span className="text-white">Followers</span>
                                                </div>
                                                <div className="col-auto">
                                                    <span className="h6">260 </span>
                                                    <span className="text-white">Following</span>
                                                </div>
                                            </div>

                                            <p className="text-lg text-white mb-0">
                                                Cop Kampanart Chaimooltan I'm a student @ Yupparaj Wittayalai School
                                                <br/>
                                                🔭 I’m currently working on OCR , Voice Assistant , Programing (Python,C,Js,Ts) , Web Developer(Front & Back)
                                                <br/>
                                                🌱 I’m currently learning NLP , Deep & Machine learning
                                                <br/>


                                                💕 Want to be a good AI Engineering , AI Research , Software Engineering
                                                <br />
                                                <a href="javascript:;" className="text-light icon-move-right">
                                                    More about me
                                                    <i className="fas fa-arrow-right text-sm ms-1" />
                                                </a>
                                            </p>
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
  