function Certified ({ cerall }) {
  if (cerall) {
    return (
      <div>
        <div className="container">
          <div className="row">
          <h3 className="text-center mt-5 mb-5">Certificate เกียรติบัตรทั้งหมด</h3>
          {cerall.map((e) => (
            <div className="col-xl-3">
              <div className="card" key={e.c_id}>
                <img src={e.c_pic} className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">{e.c_name}</h5>
                  <p className="card-text">จัดโดย : {e.c_org}</p>
                  <a href={`/certificate/${e.c_id}`} className="btn btn-primary">รายละเอียด</a>
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
