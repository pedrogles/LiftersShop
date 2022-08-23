import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import '../../style/productdetails/productdetails.css';
import NavProducts from "../../components/navproduct/NavProducts";

const ProductDetails = ({ product }) => {
    return (
        <div id="container">  
            <NavProducts />
            <div id="product-container">
                <div className="photos">
                    <Row id='photos' xs={1} md={2} className="g-2">
                        {product.fotos.map((foto, key) => (
                            <Col key={key}>
                                <Card>
                                    <Card.Img variant="top" src={foto.url} />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="product-options">
                    <div className="product-description">
                        <h2>{product.titulo}</h2>
                        <h3>{product.valor}</h3>
                        <p>{product.descricao} </p>
                    </div>
                    <div className="product-color">
                        <h4>Color</h4>
                        <ul>
                            {product.cores.map((cor, key) => (
                                <li key={key}>
                                    <button style={{ backgroundColor: cor.codigo }}></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="product-size">
                        <h4>Size</h4>
                        <ul>
                            {product.tamanhos.map((size, key) => (
                                <li key={key}>
                                    <button>{size}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="btn-back">
                        <Link to="/">
                            <button>Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;