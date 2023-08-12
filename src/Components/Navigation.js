import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavColor, setShowNavColor] = useState(false);

  return (
    <>
      <MDBNavbar sticky expand='lg' dark className='bg-set'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='./' className='ml-50 fw-bold'>AI-SlideWizard</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
            className='mr-20 toggler-set'
          >
          <MDBIcon fas icon="ellipsis-v" className='mr-20'/>
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink href='./#Features'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                {/* <MDBNavbarLink href='./#About'>Our Team</MDBNavbarLink> */}
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <MDBNavbarBrand href='http://isb.nu.edu.pk/aim/'>
            <img
              src='./aim_lab.jpeg'
              height='55'
              width='200'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}