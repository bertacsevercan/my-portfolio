import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './containers/Home';
import Resume from './containers/Resume';
import Contact from './containers/Contact';
import Projects from './containers/Projects';
import About from './containers/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
