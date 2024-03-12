import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-light'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to='/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </Link>
          <Link to='/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </Link>
          <Link to='/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </Link>
          <Link to='/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </Link>
          <Link to='/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </Link>
          <Link to='/' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </Link>
        </div>
      </section>

      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-warning'>
                Rex International
              </h6>
              
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Products</h6>
              <p>
                <Link to='/' className='text-reset text-decoration-none'>
                Poop And Pee Odour Eliminator
                </Link>
              </p>
              <p>
                <Link to='/' className='text-reset text-decoration-none'>
                Herbal Pet Deodorizer
                </Link>
              </p>
              <p>
                <Link to='/' className='text-reset text-decoration-none'>
                Tap And Tile Cleaner
                </Link>
              </p>
              <p>
                <Link to='/' className='text-reset text-decoration-none'>
                All In One Detergent With Enzyme
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Useful links</h6>
              <p>
                <Link to='/' className='text-reset text-decoration-none'>
                  Pricing
                </Link>
              </p>
              <p>
                <Link to='/' className='text-reset text-decoration-none'>
                  Settings
                </Link>
              </p>
              <p>
                <Link to='/' className='text-reset text-decoration-none'>
                  Orders
                </Link>
              </p>
              <p>
                <Link to='/' className='text-reset text-decoration-none'>
                  Help
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Address
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                rexinternation@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright: &nbsp;
        <Link className='text-reset fw-bold text-decoration-none' to='/'>
          Rexinternationalddn.com
        </Link>
      </div>
    </MDBFooter>
  );
}