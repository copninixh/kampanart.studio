

function Activities({ activity }) {
  if (activity) {
    return (
      <div className="animate__animated animate__fadeIn">
        <div className="container">
          <div className="row">
       
          <div className="col-xl-8 col-lg-8">
            <div className="row">
              {activity.map((e) => (
                <div className="col-xl-6 col-lg-6 mb-3">
                  <a href={`/activities/${e.a_id}`} key={e.a_id}>
                    <div className="card move-on-hover">
                      <img className="w-100 img-activity" src={e.a_pic}  />
                    </div>
                    <div className="mt-2 ms-2">
                      <h6 className="mb-0 f1 fw-bold f-activity-detail">{e.a_name}</h6>
                    </div>
                  </a>



                </div>
          
              ))}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 mx-auto mt-md-0 mt-5">
              <div className="position-sticky" style={{top: '100px !important'}}>
                <h4 className="f3 text-center" style={{fontSize:'27px'}}>เพราะชีวิตไม่ได้มีแค่<u>การเรียน</u> ความรู้ ประสบการณ์ <br/>นอกห้องเรียน ของ <br/> "นายกัมปนาท ชัยมูลฐาน"</h4>
                <h6 className="text-secondary font-weight-normal f3 text-center"  style={{fontSize:'25px'}}>ตลอดชีวิตมัธยมศึกษาตอนปลาย</h6>
                <p className="text-center"><a href="all_activities" className="btn btn-primary">ดูทั้งหมด <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true" /></a></p>
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
