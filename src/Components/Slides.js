import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody
}
from 'mdb-react-ui-kit';

function Slides({slides}) {

  const [currentSlide, setSlide] = useState(0);

  const download_slides = async () => {
    try {
        const response = await axios.get('/download');
    } catch (error) {
        console.error('Error fetching image:', error);
    }
  }

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <MDBRow className='d-flex flex-column justify-content-center'>
        <MDBCol md='12' className='position-fixed overflow-hidden' style={{ right: 0, left: 0 }}>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <div className='main'>
                  <div id="slide" className="parent">
                      <div className='float-child'>
                          <div>
                            <h1 data-testid="title">{slides[currentSlide].Heading}</h1>
                            <p data-testid="text">{slides[currentSlide].Content}</p>
                          </div>
                      </div>
                      {/* <div className='float-child'>
                        <img src={slides[currentSlide].image} alt="Image" />
                      </div> */}
                  </div>
              </div>

              <div id="navigation" className="text-center">
                  <button
                      data-testid="button-restart"
                      className={currentSlide === 0 ? "small outlined" : "small"}
                      disabled={currentSlide === 0}
                      onClick={() => setSlide(0)}
                  >
                      Restart
                  </button>
                  <button
                      data-testid="button-prev"
                      className={currentSlide === 0 ? "small outlined" : "small"}
                      disabled={currentSlide === 0}
                      onClick={() => setSlide(currentSlide - 1)}
                  >
                      Previous
                  </button>
                  <button
                      data-testid="button-next"
                      className={currentSlide === slides.length - 1 ? "small outlined" : "small"}
                      disabled={currentSlide === slides.length - 1}
                      onClick={() => setSlide(currentSlide + 1)}
                  >
                      Next
                  </button>
                  <button
                      data-testid="button-donwload"
                  >
                      Download
                  </button>
                  <button
                      data-testid="button-try-agian"
                  >
                      Try Again
                  </button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Slides;