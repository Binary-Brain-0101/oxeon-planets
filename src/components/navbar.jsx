import React, {useEffect,useState} from "react";
import "../App.css";


const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateNavbarColor = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / maxScroll) * 100;
    const intensity = Math.floor(scrollPercentage / 10); // Adjust the value based on the desired intensity scale

    // Define your desired color scale here
    const colorScale = [
      "#fafdff", // 0% - lowest intensity color
      "#f5fcff",
      "#effbff",
      "#eaf8ff",
      "#e4f6ff",
      "#dff3ff",
      "#d9f0ff",
      "#d3eeff",
      "#cdebff",
      "#c7e8ff",
      "#c7e8ff", // 90% - highest intensity color
    ];

    return colorScale[intensity];
  };

  const navbarColor = calculateNavbarColor();

  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top"style={{ backgroundColor: navbarColor }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={"/images/logo.png"} alt="Oxeon Service" height="60px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-nav"
          aria-controls="navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
               
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
