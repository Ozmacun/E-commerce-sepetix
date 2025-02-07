import { Route, Switch } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
