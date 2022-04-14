import React from "react";

import "./About.css";
export default function About(){
    return (
<div className="about-container">
    <div className="row">
        
        <div className="col-6">
<img src="esy-avatar.png" className="About-image border border-5 rounded-circle" alt="A visual representation of the portfolio's owner" rel="noreferrer"/> 
        </div>
        <div className= "col-6">
    <h2>
        All About Me
    </h2>
    <p className="update  mx-auto p-5 m-4">
       Hello! I'm a certified language teacher, multilingual and junior front-end developer currently living in Japan. My coding journey was born out of a desire to switch to a fast-paced career.
<br/> After Several trial and error in random coding bootcamps in 2020, I thought coding wasn't for me. In February 2021, I decided to give it one last shot and enrolled at SheCodes. Despite the complexities that come with coding, I'm determined to ride the waves until I sail at long last in the sea of web development.
<br/>
I'm currently seeking new opportunities in front-end development. I'm open to work remotely and have flexible hours. I'm skilled in Javascript, CSS, Flebox, Bootstrap, VanillaJS, SEO and React. I'm currently learning Ruby. 
    </p>
    </div>
    </div>
</div>
    );
}