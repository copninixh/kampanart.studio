import Skeleton from 'react-loading-skeleton'



function Awarding({ awards }) {

  if (awards) {
    return (
      <div className="animate__animated animate__zoomInDown">
  
        <div className="container">
          <div className="row">
      


          
          {awards.map((e) => (
            <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 mb-5">
              <div className="card h-100" key={e.a_id}>
                <img src={e.a_pic} className="card-img-top h-75"/>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{e.a_name}</h5>
                  <p className="f-awards-detail"><i className="fas fa-trophy" style={{fontSize:"16px"}}></i> {e.a_awards}</p>
                  <a href={`/awards/${e.a_id}`} className="btn btn-primary">รายละเอียด <i className="fas fa-location-arrow"></i></a>
                </div>
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-center">
            <a href="all_awards " className="btn-custom">ดูทั้งหมด <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true" /></a>
          </div>

          
      
        </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Awarding
