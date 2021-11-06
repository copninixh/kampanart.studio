import Certificate from './cer'

function Certified ({ cer }) {
  if (cer) {
    return (
      <div>
        <div className="container">
          <div className="row">
          <h3 className="text-center mb-5">Certificate เกียรติบัตร</h3>
          {cer.map((e) => (
            <div className="col-xl-3">
              <div className="card" key={e.c_id}>
                <img src={e.c_pic} className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title"><Certificate c_id={e.c_id} c_name={e.c_name} c_org={e.c_null} /></h5>
                  <p className="card-text"><Certificate c_id={e.c_id} c_name={e.c_null} c_org={e.c_org} /></p>
                  <a className="btn btn-primary">รายละเอียด</a>
                </div>
              </div>

            </div>
      
          ))}
          <div className="col-lg-3 col-md-12 col-12">
            <div className="card card-blog card-background cursor-pointer">
              <div className="full-background" style={{backgroundImage: 'url("../assets/img/cop/cop.jpg")'}} />
              <div className="card-body">
                <div className="content-left text-start my-auto py-4">
                  <h2 className="card-title text-white">เกียรติบัตรเพิ่มเติม</h2>
                  <p className="card-description text-white">Rather than worrying about switching offices every couple years, you stay in the same place.</p>
                  <a href="javascript:;" className="text-white text-sm icon-move-right">รายละเอียด
                    <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
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

export default Certified
