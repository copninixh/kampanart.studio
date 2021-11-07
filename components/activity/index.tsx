import Activity from './act'

function Activities({ activity }) {
  if (activity) {
    return (
      <div className="animate__animated animate__fadeIn">
        <div className="container">
          <div className="row">
          <h3 className="text-center mt-5 mb-5">Activity กิจกรรม</h3>
          <div className="col-xl-8 col-lg-8">
            <div className="row">
              {activity.map((e) => (
                <div className="col-xl-6 col-lg-6 mb-3">
                  <a href={`/activities/${e.a_id}`} key={e.a_id}>
                    <div className="card move-on-hover">
                      <img className="w-100" src={e.a_pic}  />
                    </div>
                    <div className="mt-2 ms-2">
                      <h6 className="mb-0">{e.a_name}</h6>
                    </div>
                  </a>



                </div>
          
              ))}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 mx-auto mt-md-0 mt-5">
              <div className="position-sticky" style={{top: '100px !important'}}>
                <h4>เพราะชีวิตไม่ได้มีแค่<u>การเรียน</u> ความรู้ ประสบการณ์ <br/>นอกห้องเรียน ของ <br/> "นายกัมปนาท ชัยมูลฐาน"</h4>
                <h6 className="text-secondary font-weight-normal">ตลอดชีวิตมัธยมศึกษาตอนปลาย</h6>
                <a href="all_activities" className="btn btn-primary">ดูทั้งหมด <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true" /></a>
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
