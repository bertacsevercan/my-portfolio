import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
