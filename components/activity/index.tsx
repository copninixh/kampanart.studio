import Activity from './act'

function Activities({ activity }) {
  if (activity) {
    return (
      <div>
        <div className="container">
          <div className="row">
          <h3 className="text-center">Activity 🏆</h3>
          {activity.map((e) => (
            <div className="col-xl-6">
              <div className="card" key={e.a_id}>
                <img src="" className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title"><Activity a_id={e.a_id} a_name={e.a_name} a_org={e.a_null} /></h5>
                  <p className="card-text"><Activity a_id={e.a_id} a_name={e.a_null} a_org={e.a_org} /></p>
                  <a className="btn btn-primary">รายละเอียด</a>
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

export default Activities
