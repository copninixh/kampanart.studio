function Certified ({ cerall }) {
  if (cerall) {
    return (
      <div>
        <div className="container">
          <div className="row">

          {cerall.map((e) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12">
              <div className="card" key={e.c_id}>
                <img src={e.c_pic} className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">{e.c_name}</h5>
                  <p className="card-text">จัดโดย : {e.c_org}</p>
                  <a href={`/certificate/${e.c_id}`} className="btn btn-primary">รายละเอียด</a>
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

export default Certified
