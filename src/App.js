import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import BuildPage from "./BuildPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/BuildPage" element={<BuildPage />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
