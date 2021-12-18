

function Volun({ volunt }) {
  if (volunt) {
    return (
      <div>
        <section className="mt-5 animate__animated animate__fadeIn">
          <div className="container">
     
            <div className="row mt-6">
          {volunt.map((e) => (
          
          <div className="col-lg-4 col-md-12">
            <div className="card card-plain h-75">
              <div className="card-body">
                <div className="author">
                  <div className="name">
                    <a href={`/volunteer/${e.v_id}`}>
                    <h6 className="f-volunteer f3">{e.v_name}</h6>
                    </a>
                    <div className="stats ">
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
