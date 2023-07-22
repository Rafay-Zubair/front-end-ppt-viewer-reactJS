import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

import Main from './Main';

function Slides({slides}) {

  const list_bg = ['bg1', 'bg2', 'bg3']

  const [currentSlide, setSlide] = useState(0);
  const [currentBg, setBg] = useState(0);
  const [isResponseReceived, setIsResponseReceived] = useState(false);

  const try_again = () => {
    setIsResponseReceived(true)
  }

  const next_bg = () => {
    setBg((currentBg + 1) % list_bg.length)
  }

  const prev_bg = () => {
    setBg((currentBg + 5) % list_bg.length)
  }

  const download_slides = () => {
    axios({
      url: 'http://127.0.0.1:5000/download',
      method: 'POST',
      responseType: 'blob', // Important: Set the response type to 'blob'
      data: {template_no: currentBg + 1}
    }).then((response) => {
      // Create a URL object from the response data
      const url = window.URL.createObjectURL(new Blob([response.data]));
      // Create a link element to initiate the download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'presentation.pptx'); // Set the desired filename
      // Trigger the download by simulating a click on the link
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <MDBRow className='d-flex flex-column justify-content-center'>
        <MDBCol md='12' className='position-fixed overflow-hidden' style={{ right: 0, left: 0 }}>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <div className='main'>
                  <div id="slide" className={list_bg[currentBg]}>
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
                {/* IMPORTANT: Add Flex Box for the buttons */}
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
                      onClick={download_slides}
                      data-testid="button-donwload"
                  >
                      Download
                  </button>
                  <button
                      // onClick={try_again}
                      data-testid="button-try-agian"
                  >
                      Try Again
                  </button>
                  <button
                      onClick={next_bg}
                      data-testid="button-n"
                  >
                      N
                  </button>
                  <button
                      onClick={prev_bg}
                      data-testid="button-p"
                  >
                      P
                  </button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>


      {isResponseReceived && <Router>
        <Switch>
        <Route path="/" render={(props) => <Main slide={null} />} />
        </Switch>
      </Router>}
    </MDBContainer>
  );
}

export default Slides;