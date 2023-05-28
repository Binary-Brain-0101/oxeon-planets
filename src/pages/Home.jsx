import React from "react";
// import "./app.css";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Welcome to Oxeon service</h1>
          <p>
            We provide cutting-edge AI models to help you solve complex problems
            and make smarter decisions.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2>Featured AI Models</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card featured-image">
            <img
              className="card-img-top"
              src="https://via.placeholder.com/300x200.png"
              alt="Featured AI model"
            />
            <div className="card-body">
              <h5 className="card-title">Featured AI model</h5>
              <p className="card-text">
                This is a brief description of the featured AI model. It can be
                used to provide more information about the model and its
                capabilities.
              </p>
            </div>
            <div className="caption">Price: $1000</div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card featured-image">
            <img
              className="card-img-top"
              src="https://via.placeholder.com/300x200.png"
              alt="Featured AI model"
            />
            <div className="card-body">
              <h5 className="card-title">Featured AI model</h5>
              <p className="card-text">
                This is a brief description of the featured AI model. It can be
                used to provide more information about the model and its
                capabilities.
              </p>
            </div>
            <div className="caption">Price: $1000</div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card featured-image">
            <img
              className="card-img-top"
              src="https://via.placeholder.com/300x200.png"
              alt="Featured AI model"
            />
            <div className="card-body">
              <h5 className="card-title">Featured AI model</h5>
              <p className="card-text">
                This is a brief description of the featured AI model. It can be
                used to provide more information about the model and its
                capabilities.
              </p>
            </div>
            <div className="caption">Price: $1000</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Popular AI Models</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
       <div class="card featured-image">
        <img
          class="card-img-top"
          src="https://via.placeholder.com/300x200.png"
          alt="Featured AI model"
        />
        <div class="card-body">
          <h5 class="card-title">Featured AI model</h5>
          <p class="card-text">
            This is a brief description of the featured AI model. It can be
            used to provide more information about the model and its
            capabilities.
          </p>
        </div>
        <div class="caption">Price: $1000</div>
       </div>
        </div>

       <div class="col-md-4">
       <div class="card featured-image">
        <img
          class="card-img-top"
          src="https://via.placeholder.com/300x200.png"
          alt="Featured AI model"
        />
        <div class="card-body">
          <h5 class="card-title">Featured AI model</h5>
          <p class="card-text">
            This is a brief description of the featured AI model. It can be
            used to provide more information about the model and its
            capabilities.
          </p>
        </div>
        <div class="caption">Price: $1000</div>
        </div>
        </div>
        </div>
       <div/>
        <div class="row">
          <div class="col">
            <h2>Popular AI Models</h2>
          </div>
        </div> 

         </div>
  );
};

export default Home;

