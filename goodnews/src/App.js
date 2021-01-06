import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';
import Title from './components/pages/Title';
import Navbar from './components/Layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './components/pages/Details';
import About from './components/pages/About';


function App() {
  return (
    <Router>
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <div className="App">

        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/title" component={Title} />
          <Route exact path="/details/:id" component={Details} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
