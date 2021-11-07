
function AwardingAll({ awardsall }) {

  if (awardsall) {
    return (
      <div>
        
        <div className="container">
          <div className="row">
      


          
          {awardsall.map((e) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12">
              <div className="card" key={e.a_id}>
                <img src={e.a_pic} className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">{e.a_name}</h5>
                  <p className="card-text">{e.a_awards}</p>
                  <a href={`/awards/${e.a_id}`} className="btn btn-primary btn-rounded">รายละเอียด</a>
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
