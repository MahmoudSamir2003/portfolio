import NavBar from "./Components/NavBar/NavBar";
import HomePortfolio from "./Components/Home/HomePortfolio";
import MyProjects from "./Components/projects/MyProjects";
import SkillsCounter from "./Components/Skills/SkillsCounter";
import Contact from "./Components/Contact/Contact";
import { DarkModeProvider } from "./Components/DarkModeContext/DarkModeContext";

function App() {
  // Remove the useDarkMode hook from here

  return (
    <DarkModeProvider> {/* This should be the outermost component */}
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
        {/* The divider should be within the context */}
        <div className="divider"></div>
        <div id="Contact">
          <Contact />
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
