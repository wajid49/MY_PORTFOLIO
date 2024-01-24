import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/wajid-image.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Abdul Wajid</h6>
            <h3>Front-end-developer</h3>
            <p>
            Graduated in Computer Science from Federal Urdu University of Arts, Science and Technology, 
            Karachi. Web developer with more than 2 years of front-end experience. Experienced in building 
            responsive web applications, familiar with modern frameworks with special emphasis on coding. 
            As well as designing the website using Elementor and plugins on Wordpress. And also designing the UI and UX.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
 

