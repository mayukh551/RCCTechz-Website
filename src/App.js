import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import Event from './Components/Event/Event'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./Components/Project/Project";
import NotFound from "./Components/NotFound";
import Main from "./Components/Notices/Inlustro 3.0/Main";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/events" element={<Event />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/notice" element={ <Main/> } />
      </Routes>
    </Router>
  );
}

export default App;
