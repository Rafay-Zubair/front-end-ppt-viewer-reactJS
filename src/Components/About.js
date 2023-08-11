import React from "react";

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple
}
from 'mdb-react-ui-kit';

function About() {
    return(
        <div id="About">
            <MDBContainer fluid className='p-4 background-radial-gradient-2 overflow-hidden'>
                <div style={{margin:'30px'}}></div>
                <MDBRow>
                    <MDBCol md='12' className='text-center text-md-start d-flex flex-column justify-content-center'>
                        <h1 className="my-5 display-3 ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)', textAlign:'center'}}>
                            SUPERVISORS<br />
                            <span style={{color: 'hsl(218, 81%, 75%)'}}></span>
                        </h1>
                    </MDBCol>
                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol md='2' className='position-relative mt-10'>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='./dp.jpg' fluid alt='...' style={{border:'5px solid transparent'}}/>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Hassan Mujtaba</MDBCardTitle>
                                    <MDBCardText>
                                        HoD AI & Data Science <br /> AIM Lab
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        {/* <div style={{margin:'0px'}}></div> */}
                        <MDBCol md='2' className='position-relative mt-10'>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='./dp.jpg' fluid alt='...' style={{border:'5px solid transparent'}}/>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Zonera Anjum</MDBCardTitle>
                                    <MDBCardText>
                                        AIM Lab <br /> MS(AI) <br /> FAST-NU
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBRow>

                <MDBRow>
                    <MDBCol md='12' className='text-center text-md-start d-flex flex-column justify-content-center'>
                        <h1 className="my-5 display-3 ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)', textAlign:'center'}}>
                            THE<br />
                            <span style={{color: 'hsl(218, 81%, 75%)'}}>TEAM</span>
                        </h1>
                    </MDBCol>
                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol md='2' className='position-relative mt-10'>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='./dp.jpg' fluid alt='...' style={{border:'5px solid transparent'}} />
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Obaidullah Javed</MDBCardTitle>
                                    <MDBCardText>
                                        BS(CS) 2020  <br /> FAST-NU
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md='2' className='position-relative mt-10'>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='./dp.jpg' fluid alt='...' style={{border:'5px solid transparent'}}/>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Rafay Zubair Gill</MDBCardTitle>
                                    <MDBCardText>
                                        BS(CS) 2020  <br /> FAST-NU
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md='2' className='position-relative mt-10'>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='./dp.jpg' fluid alt='...' style={{border:'5px solid transparent'}}/>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Saad Ansari</MDBCardTitle>
                                    <MDBCardText>
                                        BS(CS) 2020  <br /> FAST-NU
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md='2' className='position-relative mt-10'>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='./dp.jpg' fluid alt='...' style={{border:'5px solid transparent'}}/>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Mahnoor Akhtar</MDBCardTitle>
                                    <MDBCardText>
                                        BS(CS) 2020  <br /> FAST-NU
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md='2' className='position-relative mt-10'>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='./dp.jpg' fluid alt='...' style={{border:'5px solid transparent'}}/>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Maryam Amajd</MDBCardTitle>
                                    <MDBCardText>
                                        BS(AI) 2021  <br /> FAST-NU
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md='2' className='position-relative mt-10'>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='./dp.jpg' fluid alt='...' style={{border:'5px solid transparent'}}/>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Fatima Tahir</MDBCardTitle>
                                    <MDBCardText>
                                        BS(AI) 2021  <br /> FAST-NU
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default About