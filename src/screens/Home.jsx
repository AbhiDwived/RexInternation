import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import products from '../products'
import ProductScreen from "./ProductScreen";
import Banner from '../components/Banner';


const Home = () => {
  return (
    <>
        <Banner />
        <Container fluid className='py-4 pl-4 pr-4 rounded' style={{backgroundColor:"#D3D3D3"}}>
        <Container className='py-4 pl-4 pr-4' style={{marginTop:"5%"}}>
        <Row>
          <Col><h2 style={{color:"#2e8b57", fontWeight:"700" }}>Latest Products</h2></Col>
        </Row>
         <Row>
          {products.map((product) => (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
        </Container>
        
        </Container>
        <Container style={{paddingTop:"5%", paddingBlock:"5%"}}>
        <Row>
          <Col md={12} className='text-center py-4'>
            <Image src="../images/chart.png"/>

          </Col>
        </Row>

        </Container>
    </>
  )
}

export default Home