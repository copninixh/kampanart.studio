import Award from './awarding'

function Awarding({ awards }) {
  if (awards) {
    return (
      <div>
        <div className="container">
          <div className="row">
          <h3 className="text-center">Awards 🏆</h3>
          
          {awards.map((e) => (
            <div className="col-xl-6">

              <div className="card" key={e.a_id}>
                <img src="" className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">{e.a_name}</h5>
                  <p className="card-text">{e.a_awards}</p>
                  <a href={`/awards/${e.a_id}`} className="btn btn-primary">รายละเอียด</a>
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

export default Awarding
