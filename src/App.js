import Navigation from "./Components/Navigation";
import Features from "./Components/Features";
import About from "./Components/About";
import Main from "./Components/Main";

import "./index.css";

const App = ({slides}) => {
  return (
    <div className="App">
      <Navigation />
      <Main slide={slides}/>
      <Features />
      {/* <About /> */}
    </div>
  );
};

export default App;