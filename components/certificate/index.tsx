

function Certified ({ cer }) {
  if (cer) {
    return (
      <div className="animate__animated animate__fadeIn">
        <div className="container">
          <div className="row">
        
          {cer.map((e) => (
            <div className="col-xl-3 col-lg-3 col-md-6 mb-3">
              <div className="card h-100" key={e.c_id}>
                <img src={e.c_pic} className="card-img-top h-50"/>
                <div className="card-body">
                  <h5 className="card-title f1 fw-bold text-center"><i className="fad fa-file-certificate"></i> {e.c_name}</h5>
                  <p className="card-text text-center">จัดโดย :  {e.c_org}</p>
                  <div className="d-flex justify-content-center">
                  <a href={`/certificate/${e.c_id}`} className="btn btn-primary">รายละเอียด</a>
                  </div>
                </div>
              </div>

            </div>
      
          ))}
          <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-3">
            <div className="card full-background h-75">
              <div className="" />
              <div className="card-body">
                <div className="content-left text-start my-auto py-4">
                  <h2 className="card-title text-white f3">เกียรติบัตรเพิ่มเติม</h2>
                  <p className="card-description text-white"></p>
                  <a href="all_certificate" className="text-white f1 fw-bold">ดูเพิ่มเติม
                    <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Certified
