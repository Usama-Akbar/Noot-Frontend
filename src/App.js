import "./App.css";
import Main from "./components/Main";
import Admin from "./components/Admin/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/Admin/AddProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/add/product" element={<AddProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
