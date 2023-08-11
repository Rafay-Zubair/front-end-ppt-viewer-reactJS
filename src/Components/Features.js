import React from "react";

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody
}
from 'mdb-react-ui-kit';

function Features() {
    return(
        <div id="Features">
            <MDBContainer fluid className='p-4 background-radial-gradient-2 overflow-hidden'>
                <div style={{margin:'30px'}}></div>
                <MDBRow>
                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
                        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)', textAlign:'center'}}>
                            TEXT <br />
                            <span style={{color: 'hsl(218, 81%, 75%)'}}>GENERATION</span>
                        </h1>
                    </MDBCol>
                    <MDBCol md='6' className='position-relative'>
                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody className='p-5'>
                                Slide wizard brings you the perfect output to appear in your slides
                                containing all the suitable details regarding your topic. The informative text not
                                only shows the extensive knowledge of the model but also ensures that your
                                presentation is engaging and impactful. AI Slide Wizard has gathered up
                                knowledge about text that is required in a presentation and came up with the best
                                text generative solution on one click with no research and extensive time required
                                to prepare a .pptx for work or for education
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <br />
                <MDBRow>
                    <MDBCol md='6' className='position-relative'>
                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody className='p-5'>
                                This website is equipped with an innovative image generator that gives a
                                new and unique experience to each visit. With this feature, you will never see the
                                same image twice! Whether you're a creative pro, looking for inspiration or just
                                want to change your browser, our Image Generator will boost up your
                                presentation's visuals. These images come from a learning diffusion model that is
                                trained on millions of images dataset to provide you an image that is according to
                                the content you have in your slide making it more visually appealing.
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
                        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)', textAlign:'center'}}>
                            IMAGE <br />
                            <span style={{color: 'hsl(218, 81%, 75%)'}}>GENERATION</span>
                        </h1>
                    </MDBCol>
                </MDBRow>
                <br />
                <MDBRow>
                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
                        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)', textAlign:'center'}}>
                            TEMPLATE <br />
                            <span style={{color: 'hsl(218, 81%, 75%)'}}>VARIATION</span>
                        </h1>
                    </MDBCol>
                    <MDBCol md='6' className='position-relative'>
                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody className='p-5'>
                                Template variation is another creative service of this product, allowing users
                                to select from a minimal artistic collection of innovative and attractive color
                                schemed backgrounds. These templates serve as a visually appealing canvas,
                                displaying the title and description of the related topic on each slide. Users can
                                easily customize these templates to match their brand identity or personal
                                preferences. If one is not willing to add images or want just content to appear in
                                their presentation so that they can later on add their own visual representations, AI
                                Slide Wizard gives users this control to modify their ppt as per their satisfaction
                                and need.
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Features