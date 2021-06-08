import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headers from "./Headers";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route path="/checkout">
            <Headers />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h2>Login</h2>
          </Route>
          <Route path="/" exact>
            {/* <h1>Home page</h1> */}
            <Headers />
            <Home />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
