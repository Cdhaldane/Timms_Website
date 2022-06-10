import './App.css';
import Navbar from "./Components/Navbar.js"
import Services from "./Views/Services.js"
import Shop from "./Views/Shop.js"
import About from "./Views/About.js"
import Contact from "./Views/Contact.js"
import Team from "./Views/Team.js"
import Footer from "./Views/Footer.js"
import Header from "./Views/Header.js"
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  width: 600,
};

function App() {
  return (
  <Provider template={AlertTemplate} {...options}>
   <body id="page-top" data-spy="scroll" data-target=".navbar" data-offset="0">
     <Navbar />
     <Header />
     <Services />
     <Shop />
     <About />
     <Team />
     <Contact />
    <Footer />
     </body>
   </Provider>
  );
}

export default App;
