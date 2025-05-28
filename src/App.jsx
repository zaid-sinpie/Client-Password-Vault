import { HashRouter as Router, Routes, Route } from "react-router-dom";

import SaveApp from "./components/SaveApp";
import HomePage from "./components/HomePage";

function App() {
  return (
    <section className="w-[200px] h-[250px]">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/saveApps" element={<SaveApp />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
