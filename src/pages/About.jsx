import React from "react";
import "../css/About.css";

const AboutUsPage = () => {
    return (
        <div className="about-us-page">
            <div className="company-details-container">
                <h1>Welcome to Oxeon Service!</h1>
                <p>
                    At Oxeon Service, we are dedicated to providing innovative solutions in the fields of CCTV security,
                    networking and computer systems, automation, and biometrics. With a passion for cutting-edge
                    technology and a commitment to excellence, we strive to deliver exceptional services that meet the
                    evolving needs of our clients.
                </p>
                <p>
                    Our journey began with a vision to revolutionize the way businesses approach security, connectivity,
                    and automation. Since our establishment, we have grown into a trusted provider of comprehensive
                    solutions that empower organizations to enhance their efficiency, productivity, and overall security
                    measures.
                </p>
                <p>
                    What sets us apart is our unwavering focus on delivering tailored services that align with our
                    clients' unique requirements. We believe in a personalized approach, understanding that each
                    business has distinct goals and challenges. Our team of skilled professionals works closely with our
                    clients, leveraging their expertise to design, implement, and maintain solutions that drive results.
                </p>
                <p>
                    At Oxeon Service, customer satisfaction is paramount. We go the extra mile to ensure that our
                    clients receive the highest level of service, from the initial consultation to ongoing support. We
                    listen attentively, analyze meticulously, and provide solutions that address our clients' specific
                    pain points.
                </p>
                <p>
                    Innovation is at the core of our DNA. We continually invest in research and development to stay
                    ahead of the technological curve. By leveraging the latest advancements in CCTV security,
                    networking, automation, and biometrics, we empower businesses to thrive in the digital age and
                    embrace the opportunities presented by the modern world.
                </p>
                <p>
                    Additionally, we recognize the importance of corporate social responsibility. As a responsible
                    company, we actively seek ways to contribute positively to society. We strive to minimize our
                    environmental impact and support initiatives that drive social change. Through our commitment to
                    sustainability and ethical business practices, we aim to create a better future for generations to
                    come.
                </p>
                <p>
                    Thank you for choosing Oxeon Service. We are excited to partner with you on your journey towards
                    improved security, seamless networking, optimized automation, and advanced biometric solutions.
                    Explore our range of services and discover how we can help your business achieve greater heights.
                </p>
                <p>
                    If you have any questions or require further information, our dedicated team is here to assist you.
                    We look forward to serving you and building a long-lasting partnership based on trust, expertise,
                    and mutual success.
                </p>
            </div>
            <div className="contact-info-container">
        <h2>Contact Information</h2>
        <p>Address: 123 Main Street, City, State, Country</p>
        <p>Phone: +1 234-567-8901</p>
        <p>Email: info@oxeonservice.com</p>
      </div>
      <div className="india-map-container">
        <img src="/images/map.png" alt="Map" />
      </div>
    </div>
  );
};

export default AboutUsPage;