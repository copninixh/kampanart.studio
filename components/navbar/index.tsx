import {Component} from 'react'
import Link from 'next/link'

export default class Mainpage extends Component {
    render (){
        return(
            <div>
                <nav className="navbar bg-white navbar-light navbar-expand-lg py-3 fixed-top f1" style={{fontSize:'18px'}}>
                    <div className="container">
                        <Link href="/">
                            <a className="navbar-brand fw-800 f1 " rel="tooltip" style={{fontSize:'18px'}} data-placement="bottom">
                                Kampanart Chaimooltan
                            </a>
                        </Link>
                        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon mt-2 ">
                            <span className="navbar-toggler-bar bar1 " />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </span>
                        </button>
                        <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation">
                        <ul className="navbar-nav navbar-nav-hover w-100">
                            
        
                            <li className="nav-item ms-lg-auto">
                                <Link href="https://github.com/copninich">
                                    <a className="nav-link nav-link-icon me-2">
                                        <i className="fa fa-github"  style={{fontSize:'18px'}} />
                                    
                                    </a>
                                </Link>
                        
                            </li>

                            <li className="nav-item my-lg-auto">
                                <Link href="https://copninich.medium.com/">
                                    <a className="nav-link nav-link-icon me-2">
                                
                                    <i className="fab fa-medium"  style={{fontSize:'18px'}}></i>
                                   
                                </a>
                                </Link>
                            </li>

                            <li className="nav-item my-lg-auto">
                                <Link href="https://www.facebook.com/devcop.kmrt">
                                    <a className="nav-link nav-link-icon me-2 ">
                                    <i className="fab fa-facebook"  style={{fontSize:'18px'}}></i>
                                    
                                    </a>
                                </Link>
                            </li>

                            <li className="nav-item ">
                                <Link href="https://www.instagram.com/copninich_/">
                                    <a className="nav-link nav-link-icon me-2 ">
                                    <i className="fab fa-instagram"  style={{fontSize:'18px'}}></i>
                                    </a>
                                </Link>
                            </li>

                            <li className="nav-item ">
                                <Link href="mailto:devkampanart.ch@gmail.com">
                                    <a className="nav-link nav-link-icon me-2 ">
                                    <i className="fas fa-envelope"  style={{fontSize:'18px'}}></i>
                                    </a>
                                </Link>
                            </li>

                          
                        </ul>
                        </div>
                    </div>
                </nav>

               

            </div>


        
        )
    }
        
  
    
}
  