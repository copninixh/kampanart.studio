import {Component} from 'react'

export default class Mainpage extends Component {
    render (){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-nav fixed-top f1" style={{fontSize:'18px'}}>
                    <div className="container">
                        <a className="navbar-brand fw-800 f1" href="" rel="tooltip" style={{fontSize:'18px'}} data-placement="bottom" target="_blank">
                            Kampanart Chaimooltan
                        </a>
                        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon mt-2">
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </span>
                        </button>
                        <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation">
                        <ul className="navbar-nav navbar-nav-hover w-100">
                            
        
                            <li className="nav-item ms-lg-auto">
                            <a className="nav-link nav-link-icon me-2" href="https://github.com/copninich" target="_blank">
                                <i className="fa fa-github me-1" />
                                <p className="d-inline text-sm z-index-1 font-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Star us on Github">Github</p>
                            </a>
                            </li>
                            <li className="nav-item my-auto ms-3 ms-lg-0">
                            <a href="#" className="btn btn-md bg-gradient-primary  btn-round mb-0 me-1 mt-2 mt-md-0 w-100">Login</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>

               

            </div>


        
        )
    }
        
  
    
}
  