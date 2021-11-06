import {Component, useEffect, useState} from 'react'
import Script from 'next/script'



export default function Github() {
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
    
      return (
        <div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <h4 className="card-title">Work</h4>
                  <hr className="s-hr s-hr-color mb-3" />
                  <div className="col-xl-12 col-md-6 mb-2">
                      <div className="shadow none-border bg-white" >
                          <div className="card-body">
                              <div className="row">
                             
                                  <div className="col-xxl-12">
                                        <h5 className="card-title fw-800 mt-2">ThaiHooOCR</h5>
                                        <p className="card-text">Developer</p>
                                  </div>
                              </div>    
                          </div>
                      </div>
                  </div>

                  <div className="col-xl-12 col-md-6 mb-2">
                      <div className="shadow none-border bg-white" >
                          <div className="card-body">
                              <div className="row">
                                
                                  <div className="col-xxl-12">
                                        <h5 className="card-title fw-800 mt-2">Youth Computer YRC</h5>
                                        <p className="card-text">Mentor & Staff </p>
                                  </div>
                              </div>    
                          </div>
                      </div>
                  </div>

                    <div className="col-xl-12 col-md-6 mb-2">
                        <div className="shadow none-border bg-white" >
                            <div className="card-body">
                                <div className="row">
                              
                                    <div className="col-xxl-12">
                                        <h5 className="card-title fw-800 mt-2">YRC Website Platform</h5>
                                        <p className="card-text">Developer</p>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                  <h4 className="card-title" >Github contributor</h4>
                  <hr className="s-hr s-hr-color mb-3" />
                  {data.slice(0, 12).sort().reverse().map((item) => (
                    
                      <a key={item.id} href={item.svn_url}>👾 {item.name} {item.description}<br/></a>
                      
                
                  ))}
                </div>
              </div>
              
             
            </div>
            
        </div>
      );

  
}
  






    

  
