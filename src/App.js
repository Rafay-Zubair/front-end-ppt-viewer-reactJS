import Main from "./Components/Main";
import Slides from "./Components/Slides";
import Navigation from "./Components/Navigation";
import Highlights from "./Components/Highlights";
import SlidesMain from "./Components/SlidesTemp";
import TempMain from "./Components/TempMain";
import Footer from "./Components/Footer";


import "./index.css";
import "./temp.css";

const App = ({slides}) => {
  return (
    <div className="App">
      <Navigation />
      <SlidesMain />
    </div>
  );
};

export default App;