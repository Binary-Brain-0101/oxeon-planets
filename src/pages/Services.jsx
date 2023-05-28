import {useState} from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Shop() {
    const [models, setModels] = useState([
        {
            id: 1,
            title: "Model 1",
            price: 999,
            image: "https://via.placeholder.com/300x200.png",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet fermentum sapien quis tincidunt.",
        },
        {
            id: 2,
            title: "Model 2",
            price: 799,
            image: "https://via.placeholder.com/300x200.png",
            description: "Proin nec metus id nibh sollicitudin blandit. Nunc dictum vitae augue ac ullamcorper.",
        },
        {
            id: 3,
            title: "Model 3",
            price: 1299,
            image: "https://via.placeholder.com/300x200.png",
            description:
                "Etiam sit amet diam ac tellus faucibus auctor eu at purus. Mauris bibendum ex eget velit consequat eleifend.",
        },
    ]);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">Shop Trained Models</h1>

            <div className="row gx-5">
                {models.map((model) => (
                    <div className="col-md-4" key={model.id}>
                        <div className="card mb-4 h-100">
                            <img className="card-img-top" src={model.image} alt="Model Image" />
                            <div className="card-body">
                                <h5 className="card-title">{model.title}</h5>
                                <p className="card-text">{model.description}</p>
                            </div>
                            <div className="card-footer">
                                <strong>Price: ${model.price}</strong>
                                <button className="btn btn-primary float-end">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Shop;
