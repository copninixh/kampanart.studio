import Appre from './appre'

function Appreciation ({ appre }) {
  if (appre) {
    return (
      <div>
        <div className="container">
          <div className="row animate__animated animate__fadeInUp">
          <h3 className="text-center mt-5">Appreciation คำนิยม</h3>
          
           
              {appre.map((e) => (
                <div className="col-xl-3">
                    <div className="card" key={e.a_id}>
                        <div className="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="javascript:;" className="d-block">
                            <img src={e.a_pic} className="img-fluid border-radius-lg" />
                            </a>
                        </div>
                        <div className="card-body pt-2">
                            <span className="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2 f1">{e.a_type}</span>
                            <a href="javascript:;" className="card-title h5 d-block text-darker f1">
                            {e.a_name}
                            </a>
                            <p className="card-description mb-4">
                              {e.a_position} <br/> วิทยฐานะ : {e.a_expert}
                            </p>
                            <a href={`/recommendation/${e.a_id}`} className="btn btn-primary f1 f-15">อ่านคำนิยม</a>
                            
                        </div>
                    </div>

                </div>
            
          
              ))}
            
          
         
        </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Appreciation 
