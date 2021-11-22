import {Component} from 'react'
import Script from 'next/script'
import { useAwards , useActivty , useCertificate , useVolunteer} from '@/lib/swr-hooks'
import AwardPage from '@/components/awards'
import ActivityPage from '@/components/activity'
import CertificatePage from '@/components/certificate'
import VolunteerPage from '@/components/volunteer'


export default function Portfolio() {
  const { awards , isLoading} = useAwards()
  const { activity } = useActivty()
  const { cer } = useCertificate()
  const { volunt } =  useVolunteer()
  
   
        return(
            <>
            
            <div className="container mb-5">
                <div className="row">
                    
                    <div className="col-xl-12">
                      <h3 className="f-gray f-header fw-bold mt-5">MY <span className="f-out-pink">Portfolio</span></h3>
                    </div>

                    <div className="col-xl-12">
                      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active menu_port" id="pills-awards-tab" data-bs-toggle="pill" data-bs-target="#pills-awards" type="button" role="tab" aria-controls="pills-awards" aria-selected="true">Awards</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link menu_port" id="pills-certificate-tab" data-bs-toggle="pill" data-bs-target="#pills-certificate" type="button" role="tab" aria-controls="pills-certificate" aria-selected="false">Certificate</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link menu_port" id="pills-activity-tab" data-bs-toggle="pill" data-bs-target="#pills-activity" type="button" role="tab" aria-controls="pills-activity" aria-selected="false">Activity</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link menu_port" id="pills-volunteer-tab" data-bs-toggle="pill" data-bs-target="#pills-volunteer" type="button" role="tab" aria-controls="pills-volunteer" aria-selected="false">Volunteer</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link menu_port" id="pills-used-tab" data-bs-toggle="pill" data-bs-target="#pills-used" type="button" role="tab" aria-controls="pills-used" aria-selected="false">Used</button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-awards" role="tabpanel" aria-labelledby="pills-awards-tab">
                          <AwardPage awards={awards} />
                        </div>
                        <div className="tab-pane fade" id="pills-certificate" role="tabpanel" aria-labelledby="pills-certificate-tab">
                          <CertificatePage cer={cer} />
                        </div>
                        <div className="tab-pane fade" id="pills-activity" role="tabpanel" aria-labelledby="pills-activity-tab">
                          <ActivityPage activity={activity} />
                        </div>
                        <div className="tab-pane fade" id="pills-volunteer" role="tabpanel" aria-labelledby="pills-volunteer-tab">
                          <VolunteerPage volunt={volunt} />
                        </div>
                        <div className="tab-pane fade" id="pills-used" role="tabpanel" aria-labelledby="pills-used-tab">

                        </div>
                      </div>
                  </div>

                  
                    
                </div>
            </div>
                
               
                        
                 
                 
            </>


        
        )
    
        
  
    
}
  