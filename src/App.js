import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headers from "./Headers";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // console.log(user);
  return (
    <Router>
      <div className="App">
        <switch>
          <Route path="/checkout">
            <Headers />
            <Checkout />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h2>Login</h2>
            <Login />
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
