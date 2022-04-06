import React from "react";

export default function Project() {
    return(
<div className="project-container">
    <h2>
        My Projects
    </h2>
    <div className="row">
<div className="col-4">
<h3>
       HTML/CSS
       </h3> 
       <img src="ije-landing-pix.png" alt="html landing page" rel="noreferrer" className="img-fluid rounded float-start" />
</div>
<div className="col-4">
<h3>
       HTML/CSS/JS
       </h3> 
       <img src="weather.png" className="img-fluid rounded float-end" alt="weather project" rel="noreferrer"/>
</div>
<div className="col-4">
<h3>
       VANILLA JS
       </h3> 
       <img src="portfolio-pic.png" alt="my first portfolio site" rel="noreferrer" className="img-fluid rounded float-end" />
</div>
       </div>
</div>
    );
}