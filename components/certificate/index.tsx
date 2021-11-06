import Certificate from './cer'

function Certified ({ cer }) {
  if (cer) {
    return (
      <div>
        <div className="container">
          <div className="row">
          <h3 className="text-center">Certificate</h3>
          {cer.map((e) => (
            <div className="col-xl-6">
              <div className="card" key={e.c_id}>
                <img src="" className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title"><Certificate c_id={e.c_id} c_name={e.c_name} c_org={e.c_null} /></h5>
                  <p className="card-text"><Certificate c_id={e.c_id} c_name={e.c_null} c_org={e.c_org} /></p>
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

export default Certified
