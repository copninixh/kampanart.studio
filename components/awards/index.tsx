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
                  <h5 className="card-title"><Award a_id={e.a_id} a_name={e.a_name} a_awards={e.a_null} /></h5>
                  <p className="card-text"><Award a_id={e.a_id} a_name={e.a_null} a_awards={e.a_awards} /></p>
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

export default Awarding
