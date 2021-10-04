
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
function App() {
  return (
      <Container className="bg-color">
        <Row>
          <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/home">
              <Home/>
            </Route>
            <Route exact path="/services">
              <Services/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          <Footer/>
          </Router>
        </Row>
      </Container>
  );
}

export default App;
