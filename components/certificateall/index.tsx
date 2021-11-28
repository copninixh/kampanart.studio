function Certified ({ cerall }) {
  if (cerall) {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">

          {cerall.map((e) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12">
              <div className="col-xl-12" key={e.c_id}>
                <div className="parent">
                <img src={e.c_pic} className="img-fluid img-certificate "/>
                </div>
                <div className="card-body">
                  <h5 className="text-certificate"><i className="fas fa-file-certificate"></i> {e.c_name}</h5>
                  <p className="card-text f1 fw-bold">{e.c_org}</p>
                  <a href={`/certificate/${e.c_id}`} className="btn-custom">รายละเอียด&nbsp;<i className="fas fa-location-arrow" style={{fontSize:"16px"}}></i> </a>
                  


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
