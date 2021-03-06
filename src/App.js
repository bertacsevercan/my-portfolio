import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Resume from "./containers/Resume";
import Contact from "./containers/Contact";
import Projects from "./containers/Projects";
import About from "./containers/About";
import NavBar from "./components/NavBar";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Footer from "./components/Footer";
import ReactGA from "react-ga";
import { useEffect } from "react";

const trackingId = "G-VTRXQSG4GC";

function App() {
  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <div className="content-wrapper">
          <Router>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Footer />
          </Router>
        </div>
      </div>
    </I18nextProvider>
  );
}

export default App;
