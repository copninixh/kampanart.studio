import {Component} from 'react'
import Script from 'next/script'

export default class Quote extends Component {
    render (){
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card" style={{boxShadow:"none"}}>
                                <div className="card-body">
                                
                                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                            <h4 className="card-title mb-0 text-center mt-3">เพราะความฝันของผมคือการสร้าง &quot;เทคโนโลยี&quot; <br/>ที่สร้างความเปลี่ยนแปลง และมี effect ที่ดีให้กับสังคมได้</h4>
                                            </div>
                                            <div className="carousel-item">
                                            <h4 className="card-title mb-0 text-center mt-3">เพราะความฝันของผมคือการสร้าง &quot;เทคโนโลยี&quot; <br/>ที่สร้างความเปลี่ยนแปลง และมี effect ที่ดีให้กับสังคมได้</h4>
                                            </div>
                                            <div className="carousel-item">
                                            <h4 className="card-title mb-0 text-center mt-3">เพราะความฝันของผมคือการสร้าง &quot;เทคโนโลยี&quot; <br/>ที่สร้างความเปลี่ยนแปลง และมี effect ที่ดีให้กับสังคมได้</h4>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                   
                                    <h5 className="text-center text-dark mb-0">
                                        <img className="img-fluid mt-2 w-10" src="../assets/img/cop/03.jpg"  />
                                        <br/>
                                        <span style={{color:'black',fontSize:'16px',fontWeight:'normal'}}>นายกัมปนาท ชัยมูลฐาน</span>
                                    </h5>
                                    

                                   
                                </div>
                            </div>
                        {/* end card */}
                        </div>
                    </div>
                </div>

               
                        
                 
         
                       
            </div>


        
        )
    }
        
  
    
}
  