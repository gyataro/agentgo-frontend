import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SellList from "./components/SellList";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<SellList />} />
      </Routes>
    </Router>
  );
};

export default App;
