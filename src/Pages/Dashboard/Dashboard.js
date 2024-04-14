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
 
    </div>
  )
}

export default Dashboard