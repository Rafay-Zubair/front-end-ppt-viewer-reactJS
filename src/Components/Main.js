import React, { useState } from "react";
import axios from 'axios';
import Slides from "./Slides";

const Main = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const [responseData, setResponseData] = useState(null);  
  const [isResponseReceived, setIsResponseReceived] = useState(false);


  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  const handleInput3Change = (e) => {
    setInput3(e.target.value);
  };

  const handleGenerateClick = async () => {
    // Logic for generating something based on the input data
    // You can use input1 and input2 variables here
    // console.log('Generate clicked!');
    // console.log('Input 1:', input1);
    // console.log('Input 2:', input2);
    // console.log('Input 3:', input3);

    try {
      const response = await axios.get('/generate?title=input1&number=input2&author=input3'); 
      // const slides = response.data;
      setResponseData(response.data);
      setIsResponseReceived(true);

      // Handling the images part is left for now...


    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className="parent-main">
      <div className="child-main">

        <h1>Hello World</h1>

      </div>
      <div className="Login child-main">
        <div  className="Login-form">
        {/* <h1>AI-SlideWizard</h1> */}
          <input required value={input1} onChange={handleInput1Change} type="text" placeholder="Topic" />
          <div className="input-small">
            <input required value={input2} style={{marginRight: '50px'}} onChange={handleInput2Change} type="number" placeholder="Total Slides" />
            <input required value={input3} onChange={handleInput3Change} type="text" placeholder="Author" />
          </div>
          <button onClick={handleGenerateClick}>Generate</button>
        </div>
      </div>

      <div>
        {isResponseReceived && <Slides slides={responseData} />}
      </div>
    </div>
  );
};

export default Main;