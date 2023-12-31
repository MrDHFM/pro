import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
