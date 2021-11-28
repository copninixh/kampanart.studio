

function Appreciation ({ appre }) {
  if (appre) {
    return (
      <div>
        <div className="container mt-5 wow fadeInDown">
          <div className="row">
          <h3 className="f-gray f-header fw-bold mt-5 animate__animated animate__slideInLeft">Teacher <span className="f-out-pink">Recommendation</span></h3>
          
           
              {appre.map((e) => (
                <div className="col-xl-3 col-lg-4 col-md-6 animate__animated animate__slideInUp">
                    <div className="" key={e.a_id}>
                        <div className="p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href={`/recommendation/${e.a_id}`} className="d-block">
                            <img src={e.a_pic} className="img-fluid rounded-circle" />
                            </a>
                        </div>
                        <div className="pt-2">
                          <a href={`/recommendation/${e.a_id}`}>
                            <span className="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2 f1">{e.a_type}</span>
                            <p className="text-name-teacher">
                              {e.a_name}
                            </p>
                            <p className="text-position f1">
                              {e.a_position} 
                            </p>
                          </a>
                            
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
