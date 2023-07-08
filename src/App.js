import Navigation from "./Components/Navigation";
import Highlights from "./Components/Highlights";
import Slides from "./Components/Slides";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import "./index.css";

const App = ({slides}) => {
  return (
    <div className="App">
      <Navigation />
      <Slides slides={slides}/>
      <Main />
    </div>
  );
};

export default App;