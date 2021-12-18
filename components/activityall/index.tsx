

function Activities({ activityall }) {
  if (activityall) {
    return (
      <div>
        <div className="container">
          <div className="row">

          <div className="col-xl-12">
            <div className="row">
              {activityall.map((e) => (
                <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 mb-4">
                  <a href={`/activities/${e.a_id}`} key={e.a_id}>
                    <div className="col-xxl-12 col-xl-12 image-box">
                      <div className="image-activities-page">
                        <img className="img-fluid image-detail image-activities-radius" loading="lazy" data-src={e.a_pic}  />
                        
                      </div>
                    </div>
                    
                    <div className="mt-2 ms-2">
                      <h6 className="mb-0 f3 text-center text-activities-page" style={{fontSize:"21px"}}>{e.a_name}</h6>
                    </div>
                  </a>



                </div>
          
              ))}
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

export default Activities
