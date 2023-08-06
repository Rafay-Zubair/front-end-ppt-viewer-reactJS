import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import "./index.css";
import SlidesWOI from "./Components/SlidesWOI";
import Slides from "./Components/Slides";

const App = ({slides}) => {
  return (
    <div className="App">
      <Navigation />
      <Main slide={slides}/>
      
      {/* <Slides slides={slides} /> */}
      {/* <SlidesWOI slides={slides}/> */}
    </div>
  );
};

export default App;