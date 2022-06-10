import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import Event from './Components/Event/Event'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
