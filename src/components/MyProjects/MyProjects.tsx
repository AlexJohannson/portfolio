import './MyProjects.css'
import HTMLComponent from "../HTMLComponents/HTMLComponent.tsx";
import JavaScriptComponent from "../JavaScriptComponent/JavaScriptComponent.tsx";
import ReactComponent from "../ReactComponent/ReactComponent.tsx";
import NextComponent from "../NextComponent/NextComponent.tsx";
import PythonDrfComponent from "../PythonDrfComponent/PythonDrfComponent.tsx";

export const MyProjects = () => {
    return (
        <>
            <div className='project-container'>
                <HTMLComponent/>
                <JavaScriptComponent/>
                <ReactComponent/>
                <NextComponent/>
                <PythonDrfComponent/>
            </div>
        </>
    );
};
export default MyProjects;