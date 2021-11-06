import Volunteer from './vol'

function Volun({ volunt }) {
  if (volunt) {
    return (
      <div>
        <div className="container">
          <div className="row">
          <h3 className="text-center">Volunteer</h3>
          {volunt.map((e) => (
            <div className="col-xl-6">
              <div className="card" key={e.v_id}>
                <img src="" className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title"><Volunteer v_id={e.v_id} v_name={e.v_name} v_org={e.v_org} /></h5>
                  <p className="card-text"><Volunteer v_id={e.v_id} v_name={e.v_null} v_org={e.v_org} /></p>
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

export default Volun
