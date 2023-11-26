import NavBar from "./Components/NavBar/NavBar";
import HomePortfolio from "./Components/Home/HomePortfolio";
import MyProjects from "./Components/projects/MyProjects";
import SkillsCounter from "./Components/Skills/SkillsCounter";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="HomePortfolio">
        <HomePortfolio />
      </div>
      <div id="MyProjects">
        <MyProjects />
      </div>
      <div id="SkillsCounter">
        <SkillsCounter />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
