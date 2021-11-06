import Activity from './act'

function Activities({ activity }) {
  if (activity) {
    return (
      <div>
        <div className="container">
          <div className="row">
          <h3 className="text-center mt-5 mb-5">Activity 🏆</h3>
          <div className="col-xl-8">
            <div className="row">
              {activity.map((e) => (
                <div className="col-xl-6">
                  <a href="./pages/about-us.html" key={e.a_id}>
                    <div className="card move-on-hover">
                      <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/about-us.jpg" alt="aboutus" />
                    </div>
                    <div className="mt-2 ms-2">
                      <h6 className="mb-0">{e.a_name}</h6>
                    </div>
                  </a>



                </div>
          
              ))}
            </div>
          </div>
          <div className="col-xl-3 mx-auto mt-md-0 mt-5">
              <div className="position-sticky" style={{top: '100px !important'}}>
                <h4>Presentation Pages for Company, Sign In Page, Author and Contact</h4>
                <h6 className="text-secondary font-weight-normal">These is just a small selection of the multiple possibitilies you have. Focus on the business, not on the design.</h6>
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
