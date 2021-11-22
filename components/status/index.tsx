import {Component, useEffect, useRef, useState} from 'react'
import Script from 'next/script'
import { init } from "ityped";

export default function Status() {
    const [name, setName] = useState('');
    const [userName, setUsername] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(null);

   
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
            <> 
               
            
             
                
             
                    <div className="container bg-pink py-4 status_github d-none d-xxl-block d-xl-block d-lg-block d-md-block">
                        <div className="row">
                            <div className="col-xl-3 col-md-3 text-center">
                                <h1 className="num_status">{userName}</h1>
                                <h3 className="status_detail">GitHub</h3>
                            </div>
                            <div className="col-xl-3 col-md-3 text-center">
                                <h1 className="num_status counter" data-target="41">{repos}</h1>
                                <h3 className="status_detail">Repository</h3>
                            </div>
                            <div className="col-xl-3 col-md-3 text-center">
                                <h1 className="num_status counter" data-target="2">{followers}</h1>
                                <h3 className="status_detail">Follower</h3>
                            </div>
                            <div className="col-xl-3 col-md-3 text-center">
                                <h1 className="num_status counter" data-target="8">{following}</h1>
                                <h3 className="status_detail">Following</h3>
                            </div>
                        
                        </div>
                
                   
                   
                    </div>
            
            </>


        
        )
    
        
  
    
}
  