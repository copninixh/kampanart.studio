

function Activities({ activityall }) {
  if (activityall) {
    return (
      <div>
        <div className="container">
          <div className="row">
          <h3 className="text-center mt-5 mb-5">Activity กิจกรรม</h3>
          <div className="col-xl-12">
            <div className="row">
              {activityall.map((e) => (
                <div className="col-xl-6">
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
        </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Activities
