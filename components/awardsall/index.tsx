
function AwardingAll({ awardsall }) {

  if (awardsall) {
    return (
      <div>
        
        <div className="container">
          <div className="row">
      


          
          {awardsall.map((e) => (
            <div className="col-md-6">
            <div className="profile-card-4 ">
              <img src={e.a_pic} className="img img-fluid" />
              <div className="profile-content">
              <h5 className="card-title f3 mt-3" style={{fontSize:"25px"}}>{e.a_name}</h5>
               
              <p className="card-text  text-danger f1 fw-bold" style={{fontSize:"16px"}}><i className="fas fa-trophy" style={{fontSize:"16px"}}></i> {e.a_awards}</p>
              <a href={`/awards/${e.a_id}`} className="btn-custom">รายละเอียด</a>
              </div>
            </div>
          </div>
            // <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 mb-3">
            //   <div className="card" key={e.a_id} >
            //     <img src={e.a_pic} />
            //     <div className="card-body">
            //       <h5 className="card-title text-center f3">{e.a_name}</h5>
            //       <p className="card-text text-center text-danger" style={{fontSize:"20px"}}>{e.a_awards}</p>
            //       <a href={`/awards/${e.a_id}`} className="btn-custom">รายละเอียด</a>
            //     </div>
            //   </div>
            // </div>
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
