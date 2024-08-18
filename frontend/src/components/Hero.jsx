import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Mbstu Medical Center likely refers to the medical center affiliated
          with Mawlana Bhashani Science and Technology University (MBSTU) in
          Bangladesh. This center typically serves the health needs of students,
          faculty, and staff at the university. It provides basic medical
          services, consultations, and emergency care. However, the specific
          facilities, services, and resources available might vary.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image"></img>
        <span>
          <img src="/vector.png" alt="vector"></img>
        </span>
      </div>
    </div>
  );
};

export default Hero;
