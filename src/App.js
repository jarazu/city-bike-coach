
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
