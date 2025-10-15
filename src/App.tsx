import './App.css'
import AboutMeComponent from "./components/AboutMeComponent/AboutMeComponent.tsx";
import MyProjects from "./components/MyProjects/MyProjects.tsx";
import SkillsComponenet from "./components/SkillsComponent/SkillsComponenet.tsx";
import FooterComponent from "./components/FooterComponent/FooterComponent.tsx";


function App() {


  return (
    <>
        <div className='wrapper'>
            <AboutMeComponent />
            <MyProjects/>
            <SkillsComponenet/>
            <FooterComponent/>
        </div>
    </>
  )
}

export default App;
