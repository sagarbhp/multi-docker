import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';
import Landing from './Landing';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
            <Route path="/home" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </Switch>
    </Router>
  );
}

export default App;
