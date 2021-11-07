import Award from './awarding'
function Awarding({ awards }) {

  if (awards) {
    return (
      <div className="animate__animated animate__zoomInDown">
        <div className="justify-content-center text-center">
            <div className="col-xl-12 mb-5">
              <span className="badge bg-p mb-3">ผลงานและรางวัลเชิงวิชาการที่โดดเด่น</span>
              <h3 className="text-center">Awards รางวัล</h3>
              <p className="lead">ตั้งแต่ระดับชั้นมัธยมศึกษาปีที่ 4 ถึง ชั้นมัธยมศึกษาปีที่ 6 (ปีการศึกษา 2562-2564)</p>
            </div>
        </div>
        <div className="container">
          <div className="row">
      


          
          {awards.map((e) => (
            <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
              <div className="card" key={e.a_id}>
                <img src={e.a_pic} className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">{e.a_name}</h5>
                  <p className="card-text"><i className="fas fa-trophy"></i> {e.a_awards}</p>
                  <a href={`/awards/${e.a_id}`} className="btn btn-primary">รายละเอียด</a>
                </div>
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-center">
            <a href="all_awards" className="btn btn-primary">ดูทั้งหมด <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true" /></a>
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
