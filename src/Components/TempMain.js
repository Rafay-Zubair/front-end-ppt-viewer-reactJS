import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';

function TempMain() {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const [responseData, setResponseData] = useState(null);  
  const [isResponseReceived, setIsResponseReceived] = useState(false);

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    let x = e.target.value;
    x = Math.abs(x);
    setInput2(x);
  };

  const handleInput3Change = (e) => {
    setInput3(e.target.value);
  };

  const handleGenerateClick = async () => {
      console.log('Generate clicked!');
      console.log('Input 1:', input1);
      console.log('Input 2:', input2);
      console.log('Input 3:', input3);
    // try {
    //   const response = await axios.get('/generate?title=input1&number=input2&author=input3'); 
    //   // const slides = response.data;
    //   setResponseData(response.data);
    //   setIsResponseReceived(true);

    //   // Handling the images part is left for now...

    // } catch (error) {
    //   console.error('Error fetching images:', error);
    // }
  };

  useEffect(() => {
    consoleText(['History', 'Technology', 'Culture', 'Geography','Literature'], 'text');
  }, []);


  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['hsl(218, 81%, 75%)'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function() {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0])
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function() {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 120)
    window.setInterval(function() {
      if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false;

      } else {
        con.className = 'console-underscore'

        visible = true;
      }
    }, 400)
  }

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-2 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            <br />
            <div className='console-container'><span id='text'></span><div className='console-underscore' id='console'>&#95;</div></div>
          </h1>
          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </MDBCol>
        <MDBCol md='6' className='position-relative'>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <MDBRow>
              <MDBInput wrapperClass='mb-4' required value={input1} onChange={handleInput1Change} label='Topic' id='input1' type='text'/>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' required value={input2} onChange={handleInput2Change} label='Number of Slides' id='input2' type='number'/>
                </MDBCol>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' required value={input3} onChange={handleInput3Change} label='Author' id='input3' type='text'/>
                </MDBCol>
              </MDBRow>
              <MDBRow className='d-flex justify-content-center'>
                <MDBBtn className='w-40 mb-4 toggler-set' size='md' onClick={handleGenerateClick}>Generate</MDBBtn>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default TempMain;