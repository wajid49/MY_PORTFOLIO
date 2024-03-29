import React, { useState } from "react";
function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      desc: "I design UI and UX on Figma, Figpia, and Photoshop. And Mockup designs the landing page and entire website on the same platform.",
      
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Web Designer",
      desc: "I also specialize in web designing, simple landing pages or e-commerce websites, all of them I design on word press using Elementor and plugins.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Web Developer",
      desc: "One of my most important skills is building the website that I create on MernStack.In creating the website I have HTML, CSS, Java script, react js used to create the front end.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>2</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            {/* <div className="portfolio">
              <h4>0</h4>
              <p>Clients</p>
            </div> */}
            <div className="portfolio">
              <h4>02</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>2+</h4>
              <p>Completed Projects</p>
            </div>
            {/* <div className="portfolio">
              <h4>0</h4>
              <p>Achievements</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default ServicesExperience;