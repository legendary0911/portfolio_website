import Intro from "./FirstPage";
import Fields from "./Fields";
import Timeline from "../../components/timeline/timeline";
import CF from "./CfApi";
import Project from "./Projects";
import Contact from "./ContactUs";
import Header from "../../components/Header";


function Homepage() {
    return (
        <div className="App bg-yellow-500 dark:bg-[#111827]" >
            {/* <Header /> */}
            <Intro />
            <Fields />
            <Timeline />
            {/* <CF /> */}
            <Project />
            <Contact />


        </div>
    )
};


export default Homepage;