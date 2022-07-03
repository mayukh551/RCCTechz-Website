import React from "react";
import pythonLogo from "../Project/TechStack for Project/python-svgrepo-com.svg";
import cppLogo from "../Project/TechStack for Project/c-plusplus-svgrepo-com.svg";
import cSharpLogo from "../Project/TechStack for Project/c-sharp-svgrepo-com.svg";
import javaLogo from "../Project/TechStack for Project/java-svgrepo-com.svg";
import htmlLogo from "../Project/TechStack for Project/html-svgrepo-com.svg";
import css3Logo from "../Project/TechStack for Project/css3-svgrepo-com.svg";
import typescriptLogo from "../Project/TechStack for Project/typescript-logo-svgrepo-com.svg";

import reactLogo from "../Project/TechStack for Project/react.svg";
import angularLogo from "../Project/TechStack for Project/angular-icon-svgrepo-com.svg";
import vueLogo from "../Project/TechStack for Project/vue-svgrepo-com.svg";
import djangoLogo from "../Project/TechStack for Project/django-svgrepo-com.svg";
import googleLogo from "../Project/TechStack for Project/google-cloud-svgrepo-com.svg";
import flutterLogo from "../Project/TechStack for Project/flutter-svgrepo-com.svg";
import mongodbLogo from "../Project/TechStack for Project/mongodb-svgrepo-com.svg";

import ProjectsStats from "./ProjectsStats";
import Navbar from "../Home/Header/Navbar";

const ProjectHeader = () => {
    return (
        <div className="bg-slate-900">
            <Navbar />
            <div className="h-screen pt-16 pb-10 flex flex-col justify-between items-center">
                <div className="tracking-widest font-semibold text-yellow-400 mt-8 text-5xl bp_650:text-6xl">
                    PROJECTS
                </div>
                <ProjectsStats />
                <div className="flex flex-wrap justify-center gap-8 px-6">
                    <img className="w-12" src={pythonLogo} alt="python" />
                    <img className="w-12" src={cppLogo} alt="cpp" />
                    <img className="w-12" src={cSharpLogo} alt="cSharp" />
                    <img className="w-12" src={javaLogo} alt="java" />
                    <img className="w-12" src={htmlLogo} alt="html" />
                    <img className="w-12" src={css3Logo} alt="css3" />
                    <img
                        className="w-12"
                        src={typescriptLogo}
                        alt="typescript"
                    />
                    <img className="w-16" src={reactLogo} alt="react" />
                    <img className="w-12" src={angularLogo} alt="angular" />
                    <img className="w-12" src={vueLogo} alt="vue" />
                    <img className="w-12" src={djangoLogo} alt="django" />
                    <img className="w-12" src={googleLogo} alt="googleCloud" />
                    <img className="w-12" src={flutterLogo} alt="flutter" />
                    <img className="w-12" src={mongodbLogo} alt="mongodb" />
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;
