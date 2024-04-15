import React from 'react'
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='overview'>
        <div className='overview-box'>
           <div className='overview-head'>
             <p>Builds</p>
             <img alt=''></img>
           </div>

           <div className='overview-action'>
            <span>Create</span>
           </div>

           <div className='overview-head'>
             <p>10gb used</p>
           </div>
        </div>

        <div className='overview-box'>
           <div className='overview-head'>
             <p>Collaborators</p>
             <img alt=''></img>
           </div>

           <div className='overview-action'>
            <span>Teams</span>
           </div>

           <div className='overview-head'>
             <p>1 member registered</p>
           </div>
        </div>

        <div className='overview-box'>
           <div className='overview-head'>
             <p>Organization</p>
             <img alt=''></img>
           </div>

           <div className='overview-action'>
            <span>Manage</span>
           </div>

           <div className='overview-head'>
             <p>3 folders created</p>
           </div>
        </div>

        <div className='overview-box'>
           <div className='overview-head'>
             <p>Performance</p>
             <img alt=''></img>
           </div>

           <div className='overview-action'>
            <span>Analytics</span>
           </div>

           <div className='overview-head'>
             <p>10gb used</p>
           </div>
        </div>
      </div>

      <div className='sub-dashboard'>
        <div className='work-history'>
          <div className='work-header'>
            <p>Work History</p>

            <button>
               <p>All projects</p>
               <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1713210865/icons8-right-arrow-50_jl72wg.png' alt=''></img>
            </button>
          </div>

          <div className='work-list'>
             <span>No projects yet</span>
          </div>         
        </div>

        <div className='resource'>
          <div className='resource-header'>
              <p>Resource</p>
           
              <img src='' alt=''></img>
            </div>

            <div className='resource-list'>
              <div className='resource-box'>
                <div className='resource-text'>
                  <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1713173706/wave-sphere_nhsvdd.png' alt=''></img> 
                  <div className='resource-main'>
                    <p>Lantern Starter</p>
                    <span>Free templates with plugins and tools to create from </span>
                  </div>
                </div>

                <img className='resource-img' src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1700718884/icons8-dropdown-50_nfgubs.png' alt=''></img>           
              </div>
              
              <div className='resource-box'>
                <div className='resource-text'>
                  <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1713173706/wave-sphere_nhsvdd.png' alt=''></img> 
                  <div className='resource-main'>
                    <p>Turbo Starter</p>
                    <span>Free templates with plugins and tools to create from </span>
                  </div>
                </div>

                <img className='resource-img' src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1700718884/icons8-dropdown-50_nfgubs.png' alt=''></img>           
              </div>

              <div className='resource-box'>
                <div className='resource-text'>
                  <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1713173706/wave-sphere_nhsvdd.png' alt=''></img> 
                  <div className='resource-main'>
                    <p>Swelter</p>
                    <span>Free templates with plugins and tools to create from </span>
                  </div>
                </div>

                <img className='resource-img' src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1700718884/icons8-dropdown-50_nfgubs.png' alt=''></img>           
              </div>

              <div className='resource-box'>
                <div className='resource-text'>
                  <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1713173706/wave-sphere_nhsvdd.png' alt=''></img> 
                  <div className='resource-main'>
                    <p>Charlmeme</p>
                    <span>Free templates with plugins and tools to create from </span>
                  </div>
                </div>

                <img className='resource-img' src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1700718884/icons8-dropdown-50_nfgubs.png' alt=''></img>           
              </div>

            </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard