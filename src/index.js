import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import registerServiceWorker from './registerServiceWorker';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

const SLIDES = [
  {
    Heading: "Today's workout plan",
    Content: "We're gonna do 3 fundamental exercises.",
    Image: 'https://www.shutterstock.com/image-photo/attractive-african-young-confident-businesswoman-260nw-1712082700.jpg'
  },
  {
    Heading: "First, 10 push-ups",
    Content: "Do 10 reps. Remember about full range of motion. Don't rush."
  },
  {
    Heading: "Next, 20 squats",
    Content: "Squats are important. Remember to keep your back straight."
  },
  {
    Heading: "Finally, 15 sit-ups",
    Content: "Slightly bend your knees. Remember about full range of motion."
  },
  {
    Heading: "Great job!",
    Content: "You made it, have a nice day and see you next time!"
  }
];

ReactDOM.render(<App slides={SLIDES} />, document.getElementById('root'));
// registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
