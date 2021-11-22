
function AwardingAll({ awardsall }) {

  if (awardsall) {
    return (
      <div>
        
        <div className="container">
          <div className="row">
      


          
          {awardsall.map((e) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 mb-3">
              <div className="card" key={e.a_id} >
                <img src={e.a_pic} />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-center">{e.a_name}</h5>
                  <p className="card-text f3 text-center text-danger" style={{fontSize:"20px"}}>{e.a_awards}</p>
                  <a href={`/awards/${e.a_id}`} className="btn btn-primary btn-rounded w-100">รายละเอียด</a>
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

export default AwardingAll
