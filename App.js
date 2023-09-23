import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddSales from "./components/AddSales";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Revenue from "./components/Revenue";
import ShowSales from "./components/ShowSales";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/addSales" element={<AddSales />}></Route>
        <Route exact path="/showSales" element={<ShowSales />}></Route>
        <Route exact path="/revenue" element={<Revenue />}></Route>
        <Route exact path="/login" element={<LoginForm />}></Route>
        <Route exact path="/register" element={<RegisterForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
