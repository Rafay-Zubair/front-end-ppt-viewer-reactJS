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
      title: "Today's workout plan",
      text: "We're gonna do 3 fundamental exercises.",
      // image: './me.jpg'
      image: 'https://www.shutterstock.com/image-photo/attractive-african-young-confident-businesswoman-260nw-1712082700.jpg'
  },
  {
      title: "First, 10 push-ups",
      text: "Do 10 reps. Remember about full range of motion. Don't rush."
  },
  {
      title: "Next, 20 squats",
      text: "Squats are important. Remember to keep your back straight."
  },
  {
      title: "Finally, 15 sit-ups",
      text: "Slightly bend your knees. Remember about full range of motion."
  },
  {
      title: "Great job!",
      text: "You made it, have a nice day and see you next time!"
  }
];

ReactDOM.render(<App slides={SLIDES} />, document.getElementById('root'));
// registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
