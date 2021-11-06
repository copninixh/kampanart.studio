import Volunteer from './vol'

function Volun({ volunt }) {
  if (volunt) {
    return (
      <div>
        <section className="py-7">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto text-center">
                <h2 className="mb-0">กิจกรรม</h2>
                <h2 className="text-gradient text-primary mb-3">Volunteer จิตอาสา</h2>
                <p className="lead"></p>
              </div>
            </div>
            <div className="row mt-6">
          {volunt.map((e) => (
          
          <div className="col-lg-4 col-md-8">
            <div className="card card-plain">
              <div className="card-body">
                <div className="author">
                  <div className="name">
                    <a href={`/volunteer/${e.v_id}`}>
                    <h6 className="mb-0 font-weight-bolder">{e.v_name}</h6>
                    </a>
                    <div className="stats">
                      <i className="far fa-clock" aria-hidden="true" /> {e.v_year}
                    </div>
                  </div>
                </div>
                <p className="mt-4"></p>
           
              </div>
            </div>
          </div>
          
           
      
          ))}
          </div>
        
 
        </div>
      </section>

       
      </div>
    )
  } else {
    return null
  }
}

export default Volun
