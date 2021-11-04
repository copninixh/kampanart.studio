import {Component, useEffect, useRef, useState} from 'react'
import Script from 'next/script'
import { init } from "ityped";

export default function Banner() {
    const [name, setName] = useState('');
    const [userName, setUsername] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(null);

    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["Developer.", "Student.", "YRC."],
        });
    },[]);

    useEffect(()=>{
        fetch("https://api.github.com/users/copninich")
        .then(res => res.json())
        .then(data =>{
            setData(data);
        });
    }, []);

    const setData = ({name, login, followers, following, public_repos, avatar_url}) =>{
        setName(name);
        setUsername(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
    }
    return(
            <div>
                <div className="py-sm-7 py-5 position-relative page-header bg-banner min-vh-75">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mx-auto">
                                    <div className="row py-lg-4 py-5">
                                        
                                        <div className="col-lg-12 col-md-5 position-relative my-auto mb-3">
                                            <img className="img border-radius-lg rounded-circle max-width-200 w-100 position-relative z-index-2" src="../assets/img/cop/02.jpg" alt="bruce" />
                                        </div>

                                        <div className="col-lg-12 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mt-5 mt-sm-0">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <h3 className="mb-0 text-bold text-white">Copninich | <span ref={textRef}></span></h3>
                                                <div className="d-block">
                                                    <a href="https://github.com/copninich" className="btn btn-md btn-outline-light btn-round text-nowrap mb-0">Follow</a>
                                                </div>
                                            </div>

                                            <div className="row mb-4">
                                                <div className="col-auto">
                                                    <span className="h6">{repos} </span>
                                                    <span className="text-white">Repository</span>
                                                </div>
                                                <div className="col-auto">
                                                    <span className="h6">{followers} </span>
                                                    <span className="text-white">Followers</span>
                                                </div>
                                                <div className="col-auto">
                                                    <span className="h6">{following} </span>
                                                    <span className="text-white">Following</span>
                                                </div>
                                            </div>

                                            <p className="text-lg text-white mb-0">
                                                Cop Kampanart Chaimooltan I&rsquo;m a student @ Yupparaj Wittayalai School
                                                <br/>
                                                🔭 I&rsquo;currently working on OCR  Voice Assistant , Programing (Python,C,Js,Ts) , Web Developer (Front & Back)
                                                <br/>
                                                🌱 I&rsquo;currently learning NLP , Deep & Machine learning
                                                <br/>


                                                💕 Want to be a good AI Engineering , AI Research , Software Engineering
                                                <br />
                                                {/* <a href="javascript:;" className="text-light icon-move-right">
                                                    More about me
                                                    <i className="fas fa-arrow-right text-sm ms-1" />
                                                </a> */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


        
        )
    
        
  
    
}
  