import './App.css'
import AboutMeComponent from "./components/AboutMeComponent/AboutMeComponent.tsx";
import MyProjects from "./components/MyProjects/MyProjects.tsx";
import FooterComponent from "./components/FooterComponent/FooterComponent.tsx";
import  SkillsComponent from "./components/SkillsComponent/SkillsComponenet.tsx";


function App() {


  return (
    <>
        <div className='wrapper'>
            <AboutMeComponent />
            <MyProjects/>
            <SkillsComponent/>
            <FooterComponent/>
        </div>
    </>
  )
}

export default App;
