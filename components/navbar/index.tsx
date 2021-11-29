import {Component} from 'react'
import Link from 'next/link'

export default class Mainpage extends Component {
    render (){
        return(
            <>
              <nav className="navbar navbar-expand-lg navbar-dark fixed-top mb-5 py-3">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/">
                    <embed src="../assets/img/copninich.svg" width="51px" />
                  </a>
                  <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon top-bar" />
                    <span className="toggler-icon middle-bar" />
                    <span className="toggler-icon bottom-bar" />
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                    
                      </ul>
                    <div className="d-flex">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-font">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="all_awards">Award</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="all_certificate">Certificate</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="all_activities">Activities</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Volunteer</a>
                        </li>
                    
                    
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>


            
            </>


        
        )
    }
        
  
    
}
  