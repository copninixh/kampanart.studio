import {Component, useEffect, useState} from 'react'
import Script from 'next/script'


export default function Medium() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://v1.nocodeapi.com/copninich/medium/HiTjKbcSqJcLGAIX')
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
                <h4 className="card-title mt-5" >Medium @Copninich</h4>
                <hr className="s-hr s-hr-color mb-5" />
                <div className="row">

                
                
                {data.slice(0, 5).map((item) => (
                    <div className="col-xl-6" key={item.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><i className="fab fa-medium"></i> {item.title}</h5>
                                <p className="card-text"><i className="fas fa-feather"></i>  {item.creator}</p>
                                <a href={item.link} className="btn btn-primary btn-rounded btn-md">Link <i className="fas fa-chevron-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                
            
                ))}
                </div>
            </div>
        </div>
      );

  
}








    

  
