import React from 'react'

const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>OUR REGIONS</h1>
        <p>Choose the region where your home should be..</p>
        <div className="region_container">
        <div className="card">
         <img src="/region1.jpg" alt="mountains" />
         <h2>Heart of the city</h2>
         <p><span>30</span> Properties</p> 
        </div>
        <div className="card">
        <img src="/region2.jpg" alt="coastline" />
         <h2>Coastline</h2>
         <p><span>14</span> Properties</p> 
        </div>
        </div>
        </section> 
    </>
  )
}

export default Regions
