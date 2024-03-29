import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import Event from './Components/Event/Event'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./Components/Project/Project";
import NotFound from "./Components/NotFound";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/events" element={<Event />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
