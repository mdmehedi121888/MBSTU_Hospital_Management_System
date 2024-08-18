import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="about image" className=""></img>
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          The MBSTU Medical Center, affiliated with Mawlana Bhashani Science and
          Technology University (MBSTU) in Tangail, Bangladesh, serves as a
          vital healthcare facility for the university community. Established
          with the primary aim of ensuring the health and well-being of
          students, faculty, and staff, the medical center offers a range of
          services, including general medical consultations, emergency care, and
          specialist referrals. The center is equipped to handle routine medical
          issues, provide preventive care, and address health emergencies,
          ensuring that the university community has access to essential medical
          support on campus. In addition to primary healthcare services, the
          MBSTU Medical Center may offer health education programs, vaccination
          campaigns, and wellness initiatives to promote a healthy lifestyle
          among the university population. The facility operates under the
          supervision of qualified medical professionals, including doctors,
          nurses, and support staff, who are committed to delivering
          high-quality care.
        </p>
      </div>
    </div>
  );
};

export default Biography;
