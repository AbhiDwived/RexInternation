import React from "react";
import products from "../products";
import { Row, Col, ListGroup, Button, Image, ListGroupItem, Form, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating"
import Enquiry from "./Enquiry";


const ProductDetails = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const { id } = useParams();

  const product = products.find((p) => p._id === id); return (
    <>
      <Container>
        <Link to="/" className="btn btn-light">
          <i className="fas fa-arrow-left"></i>
          &nbsp; GO BACK
        </Link>
        <Row>
          <Col md={6}>
            <Image src={product.imageLong} alt={product.longname} fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3>{product.longname}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} Reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>Price : <del>${product.delprice}</del> &nbsp; ${product.price}</ListGroupItem>
              <ListGroupItem>{product.description}</ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock " : "out of stock"}
                  </Col>
                </Row>
                <Row>
                  <Col>Product Information -</Col>
                  
                </Row>
                  <Row><Col>100% Organic</Col></Row>
                  <Row><Col>Kids and Pets Safe</Col></Row>
                  <Row><Col>Chemical Free</Col></Row>
                  <Row><Col>100% Natural</Col></Row>
                  <Row><Col>Disinfect and Deodorize</Col></Row>
                <Row>
                  <Col></Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="text-center">
                <Button variant="dark" onClick={() => setModalShow(true)} >
                  Submit Inquiry
                </Button>

                <Enquiry
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </ListGroupItem>

            </ListGroup>
          </Col>


        </Row>

      </Container>
    </>
  );
};

export default ProductDetails;
