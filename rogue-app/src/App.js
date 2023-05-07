import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Navbar} exact>
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
