
// import React, { useState } from "react";
// import FeatureSection from "../components/FeatureSection";
// import EnquiryModal from "../components/WebEnquiry"; // Import the modal component
// import '../css/Services.css';
// function ServicePage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isCCTVModalOpen, setCCTVModalOpen] = useState(false);
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="container">
//       <div className="row" style={{ textAlign: "justify" }}>
//         <FeatureSection
//           title="Software Development."
//           description="Whether you’re a startup looking to make your mark or an established enterprise seeking a digital revamp, our web development services are scalable to meet your specific requirements. We offer custom web design solutions that match your business goals, making your website a powerful tool for growth and success online."
//           features={[
//             "Providing service all over India & Abroad",
//             "24/7 Available for customer support",
//           ]}
//           buttonText="Enquire"
//           imageUrl="/images/carousel/2.jpg"
//           imageLeft={false}
//           onButtonClick={openModal} // Pass the click handler
//         />
//         <FeatureSection
//           title="Advanced CCTV Solutions"
//           description="Experience unparalleled peace of mind with our cutting-edge CCTV camera services. We offer comprehensive surveillance solutions tailored to meet your specific needs, from high-definition video capture to real-time monitoring and advanced analytics. Our expert team ensures seamless installation, optimal performance, and ongoing support to keep your property safe and secure. Trust us to provide the latest technology and exceptional service for all your security needs."
//           features={[
//             "Providing service all over India & Abroad",
//             "24/7 Available for customer support",
//           ]}
//           buttonText="Get Quote"
//           imageUrl="/images/carousel/3.jpg"
//           imageLeft={true}
//           onButtonClick={openModal}
//         />
//         <FeatureSection
//           title="Smart Automation Solutions."
//           description="Elevate your environment with our state-of-the-art automation services. We specialize in integrating advanced biometric systems, access control, and alarm solutions for both residential and commercial spaces. Our custom automation services are designed to streamline your daily routines and enhance security with cutting-edge technology. Whether you need sophisticated access management, intuitive alarm systems, or personalized automation for your home or office, our expert team delivers tailored solutions that offer convenience, safety, and efficiency. Experience the future of smart living with our comprehensive automation solutions."
//           features={[
//             "Providing service all over India & Abroad",
//             "24/7 Available for customer support",
//           ]}
//           buttonText="Get Started"
//           imageUrl="/images/carousel/1.jpg"
//           imageLeft={false}
//         />
//       </div>
//       <EnquiryModal  isOpen={isModalOpen} onClose={closeModal} />
//       <EnquiryFormModal isOpen={isCCTVModalOpen} onClose={() => setCCTVModalOpen(false)} />
//     </div>
//   );
// }

// export default ServicePage;

import React, { useState } from "react";
import FeatureSection from "../components/FeatureSection";
import EnquiryModal from "../components/WebEnquiry"; // Import the software development modal component
import CCTVFormModal from "../components/CctvForm"; // Import the CCTV enquiry modal component
import '../css/Services.css';

function ServicePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCCTVModalOpen, setCCTVModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openCCTVModal = () => {
    setCCTVModalOpen(true);
  };

  const closeCCTVModal = () => {
    setCCTVModalOpen(false);
  };

  return (
    <div className="container">
      <div className="row" style={{ textAlign: "justify" }}>
        <FeatureSection
          title="Software Development."
          description="Whether you’re a startup looking to make your mark or an established enterprise seeking a digital revamp, our web development services are scalable to meet your specific requirements. We offer custom web design solutions that match your business goals, making your website a powerful tool for growth and success online."
          features={[
            "Providing service all over India & Abroad",
            "24/7 Available for customer support",
          ]}
          buttonText="Enquire"
          imageUrl="/images/carousel/2.jpg"
          imageLeft={false}
          onButtonClick={openModal} // Pass the click handler for the software modal
        />
        <FeatureSection
          title="Advanced CCTV Solutions"
          description="Experience unparalleled peace of mind with our cutting-edge CCTV camera services. We offer comprehensive surveillance solutions tailored to meet your specific needs, from high-definition video capture to real-time monitoring and advanced analytics. Our expert team ensures seamless installation, optimal performance, and ongoing support to keep your property safe and secure. Trust us to provide the latest technology and exceptional service for all your security needs."
          features={[
            "Providing service all over India & Abroad",
            "24/7 Available for customer support",
          ]}
          buttonText="Get Quote"
          imageUrl="/images/carousel/3.jpg"
          imageLeft={true}
          onButtonClick={openCCTVModal} // Pass the click handler for the CCTV modal
        />
        <FeatureSection
          title="Smart Automation Solutions."
          description="Elevate your environment with our state-of-the-art automation services. We specialize in integrating advanced biometric systems, access control, and alarm solutions for both residential and commercial spaces. Our custom automation services are designed to streamline your daily routines and enhance security with cutting-edge technology. Whether you need sophisticated access management, intuitive alarm systems, or personalized automation for your home or office, our expert team delivers tailored solutions that offer convenience, safety, and efficiency. Experience the future of smart living with our comprehensive automation solutions."
          features={[
            "Providing service all over India & Abroad",
            "24/7 Available for customer support",
          ]}
          buttonText="Get Started"
          imageUrl="/images/carousel/1.jpg"
          imageLeft={false}
        />
      </div>
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} /> 
      <CCTVFormModal isOpen={isCCTVModalOpen} onClose={closeCCTVModal} /> 
    </div>
  );
}

export default ServicePage;
