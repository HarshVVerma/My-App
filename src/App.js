// import logo from './logo.svg';
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
// import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title = "My App" aboutText= "About Us" /> */}
      {/* <Navbar/> */}
      {<Navbar title="My App" />}
      {/* <div className="container my-3">
        {<TextForm heading = "Enter your text below to analyze" />}
      </div> */}
      <AboutUs/>
    </>
  );
}

export default App;
