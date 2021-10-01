import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Restaurant from './components/Restaurant/Restaurant';
import Home from './components/Home/Home';

function App () {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/menu">
            <Restaurant></Restaurant>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
