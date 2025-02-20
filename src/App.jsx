import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import store from "./data/store";
import Login from "./pages/Login";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;