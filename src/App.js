import "./App.css";

import Footer from "./components/Footer";
import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="container">
      <div className="card">
        <Info />
        <div className="text-area">
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
