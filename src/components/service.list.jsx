// import React, {useState} from "react";
// import {
//     FaAngleDown,
//     FaAngleUp,
//     FaCamera,
//     FaNetworkWired,
//     FaUserLock,
//     FaRobot,
//     FaGlobe,
//     FaWrench,
//     FaLightbulb,
// } from "react-icons/fa";
// import "../css/Services.css";
// const ServiceList = () => {
//     const services = [
//         {
//             id: 1,
//             title: "CCTV Security",
//             image: "/images/products/cctv/analog cam.png",
//             content:
//                 "Enhance your security with our professional CCTV installation and services. We specialize in designing and implementing state-of-the-art surveillance systems tailored to your needs. Our solutions offer high-definition video recording, remote access, and intelligent analytics. Trust our skilled technicians to deliver seamless installation and ongoing support. Take control of your security and gain peace of mind with our reliable CCTV solutions.",
//             icon: <FaCamera />,
//         },
//         {
//             id: 2,
//             title: "Computer Systems & Networking",
//             image: "/images/products/cctv/analog cam.png",
//             content: "Discover the power of seamless computing with our exceptional computer systems and services. We specialize in providing cutting-edge solutions that optimize performance, enhance productivity, and streamline operations. From custom-built computers to network setups and software configurations, our team of experts ensures that your systems are tailored to meet your specific needs. Experience reliability, speed, and efficiency with our comprehensive range of computer services. Trust us to keep your technology running smoothly, so you can focus on what matters most – your success.",
//             icon: <FaNetworkWired />,
//         },
//         {
//             id: 3,
//             title: "Biometrics",
//             image: "/images/products/cctv/analog cam.png",
//             content:
//                 "Experience advanced security and streamlined access control with our cutting-edge biometrics solutions. Our expertise lies in providing reliable and sophisticated systems that ensure only authorized individuals have entry. From fingerprint recognition to facial and iris scanning, our biometric technology offers unparalleled accuracy and efficiency. Say goodbye to traditional keys and cards as we revolutionize security measures with seamless integration and robust protection. Safeguard your premises and data with our comprehensive biometric solutions designed to meet your unique needs. Trust us to deliver top-notch security and access control solutions for a safer and more efficient environment.",
//             icon: <FaUserLock />,
//         },
//         {
//             id: 4,
//             title: "Automation",
//             image: "/images/products/cctv/analog cam.png",
//             content:
//                 "Transform your office and house into smart, automated spaces with our unparalleled automation services. We offer innovative solutions that seamlessly integrate technology, enhancing convenience, security, and energy efficiency. From automated lighting and climate control to intelligent security systems and voice-activated assistants, we create environments that adapt to your needs. Experience the ease and comfort of controlling your space with just a touch or a voice command. Embrace the future of automation and elevate your lifestyle with our exceptional services.",
//             icon: <FaRobot />,
//         },
//         {
//             id: 5,
//             title: "Installation",
//             image: "/images/products/cctv/analog cam.png",
//             content:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula nisi a erat porta, nec viverra risus fringilla.",
//             icon: <FaWrench />,
//         },
//         {
//             id: 6,
//             title: "Service",
//             image: "/images/products/cctv/analog cam.png",
//             content:
//                 "Experience seamless service and professional installation tailored to your needs. Our dedicated team is committed to delivering top-quality solutions with precision and expertise. Whether it's setting up complex systems or providing efficient installations, we ensure a smooth process from start to finish. Trust us to handle all your service and installation requirements with utmost care and attention to detail. Sit back and relax as we take care of your project, ensuring optimal functionality and customer satisfaction. Let us bring your vision to life through our reliable service and impeccable installation expertise.",
//             icon: <FaLightbulb />,
//         },
//     ];

//     const [activeService, setActiveService] = useState(null);

//     const toggleContent = (id) => {
//         setActiveService((prevService) => (prevService === id ? null : id));
//     };

//     return (
//         <div className="service-list-container">
//             <div className="service-list">
//                 <h2>Our Services</h2>
//                 <ul>
//                     {services.map((service) => (
//                         <li key={service.id} className={`service-item ${activeService === service.id ? "active" : ""}`}>
//                             <div className="service-header" onClick={() => toggleContent(service.id)} style={{textAlign: "justify"}}>
//                                 <span className="service-icon">{service.icon}</span>
//                                 <span className="service-title">{service.title}</span>
//                                 <span className="service-arrow">
//                                     {activeService === service.id ? <FaAngleUp /> : <FaAngleDown />}
//                                 </span>
//                             </div>
//                             {activeService === service.id && <div className="service-content"></div>}
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {activeService && (
//                 <div className="service-details">
//                     <img src={services[activeService - 1].image} alt={services[activeService - 1].title} />
//                     <h3>{services[activeService - 1].title}</h3>
//                     <p>{services[activeService - 1].content}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ServiceList;


import React, { useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaCamera,
  FaNetworkWired,
  FaUserLock,
  FaRobot,
  FaGlobe,
  FaWrench,
  FaLightbulb,
} from "react-icons/fa";
import "../css/Services.css";

const ServiceCard = ({ service, isActive, toggleContent }) => {
  const { id, title, image, content, icon } = service;

  return (
    <div
      className={`service-card ${isActive ? "active" : ""}`}
      onClick={() => toggleContent(id)}
    >
      <div className="service-header">
        <span className="service-icon">{icon}</span>
        <span className="service-title">{title}</span>
        <span className="service-arrow">
          {isActive ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </div>
      {isActive && (
        <div className="service-content">
          <img src={image} alt={title} className="service-thumbnail" />
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const ServiceList = () => {
  const services = [
    {
                    id: 1,
                    title: "CCTV Security",
                    image: "/images/products/cctv/analog cam.png",
                    content:
                        "Enhance your security with our professional CCTV installation and services. We specialize in designing and implementing state-of-the-art surveillance systems tailored to your needs. Our solutions offer high-definition video recording, remote access, and intelligent analytics. Trust our skilled technicians to deliver seamless installation and ongoing support. Take control of your security and gain peace of mind with our reliable CCTV solutions.",
                    icon: <FaCamera />,
                },
                {
                    id: 2,
                    title: "Computer Systems & Networking",
                    image: "/images/products/cctv/analog cam.png",
                    content: "Discover the power of seamless computing with our exceptional computer systems and services. We specialize in providing cutting-edge solutions that optimize performance, enhance productivity, and streamline operations. From custom-built computers to network setups and software configurations, our team of experts ensures that your systems are tailored to meet your specific needs. Experience reliability, speed, and efficiency with our comprehensive range of computer services. Trust us to keep your technology running smoothly, so you can focus on what matters most – your success.",
                    icon: <FaNetworkWired />,
                },
                {
                    id: 3,
                    title: "Biometrics",
                    image: "/images/products/cctv/analog cam.png",
                    content:
                        "Experience advanced security and streamlined access control with our cutting-edge biometrics solutions. Our expertise lies in providing reliable and sophisticated systems that ensure only authorized individuals have entry. From fingerprint recognition to facial and iris scanning, our biometric technology offers unparalleled accuracy and efficiency. Say goodbye to traditional keys and cards as we revolutionize security measures with seamless integration and robust protection. Safeguard your premises and data with our comprehensive biometric solutions designed to meet your unique needs. Trust us to deliver top-notch security and access control solutions for a safer and more efficient environment.",
                    icon: <FaUserLock />,
                },
                {
                    id: 4,
                    title: "Automation",
                    image: "/images/products/cctv/analog cam.png",
                    content:
                        "Transform your office and house into smart, automated spaces with our unparalleled automation services. We offer innovative solutions that seamlessly integrate technology, enhancing convenience, security, and energy efficiency. From automated lighting and climate control to intelligent security systems and voice-activated assistants, we create environments that adapt to your needs. Experience the ease and comfort of controlling your space with just a touch or a voice command. Embrace the future of automation and elevate your lifestyle with our exceptional services.",
                    icon: <FaRobot />,
                },
                {
                    id: 5,
                    title: "Installation",
                    image: "/images/products/cctv/analog cam.png",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula nisi a erat porta, nec viverra risus fringilla.",
                    icon: <FaWrench />,
                },
                {
                    id: 6,
                    title: "Service",
                    image: "/images/products/cctv/analog cam.png",
                    content:
                        "Experience seamless service and professional installation tailored to your needs. Our dedicated team is committed to delivering top-quality solutions with precision and expertise. Whether it's setting up complex systems or providing efficient installations, we ensure a smooth process from start to finish. Trust us to handle all your service and installation requirements with utmost care and attention to detail. Sit back and relax as we take care of your project, ensuring optimal functionality and customer satisfaction. Let us bring your vision to life through our reliable service and impeccable installation expertise.",
                    icon: <FaLightbulb />,
                },
  ];

  const [activeService, setActiveService] = useState(null);

  const toggleContent = (id) => {
    setActiveService((prevService) => (prevService === id ? null : id));
  };

  return (
    <div className="service-list-container">
      <div className="service-list">
        <h2>Our Services</h2>
        <div className="service-cards">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={activeService === service.id}
              toggleContent={toggleContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
