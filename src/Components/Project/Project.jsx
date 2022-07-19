import React from "react";
// import Navbar from "../Home/Header/Navbar";
// import prjctImg from "../../Images/Monitors.jpg";
import ProjectHeader from "./ProjectHeader";
import projectData from "./team-project-data";

const Project = () => {
    return (
        <div className="bg-slate-800 min-h-screen">
            {/* <Navbar /> */}
            <ProjectHeader />
            <div className="grid grid-cols-1 md:grid-col-2 grid-flow-row gap-x-24 gap-y-48 py-24 text-white place-items-center">
                {projectData.map((project, index) => {
                    return (
                        <div
                            className="shadow-2xl rounded-lg py-7 px-7 bg-white w-[90%] md:w-[50%] hover:scale-110 transition-transform duration-200 flex flex-col items-center md:items-start gap-y-6 justify-evenly"
                            style={{ backgroundColor: "#2a9d8f" }}
                        >
                            <h3 className="text-center text-lg lg:text-2xl font-bold underline underline-offset-8">
                                {project.title}
                            </h3>
                            <h5 className="text-center md:text-left text-md lg:text-lg font-medium">
                                Team : {project.team.join(", ")}
                            </h5>
                            <div className="text-center md:text-left space-y-3">
                                <h6>Description</h6>
                                <p>{project.description}</p>
                            </div>
                            <a
                                href={project.repoLink}
                                target="_blank"
                                rel="noreferrer"
                                className="underline underline-offset-4 decoration-amber-200 hover:text-amber-200 hover:decoration-white duration-200"
                            >
                                GitHub Repo Link
                            </a>
                        </div>

                        // <div
                        //     className={`px-10 flex flex-col ${
                        //         index % 2 === 0
                        //             ? "md:flex-row"
                        //             : "md:flex-row-reverse"
                        //     } justify-between items-center`}
                        // >
                        //     <img
                        //         src={prjctImg}
                        //         alt="prjctImg"
                        //         className="rounded-lg shadow-2xl mb-8 md:mb-auto w-[80%] md:max-w-[40%]"
                        //     />
                        //     <div className="w-[90%] md:w-[50%] flex flex-col items-center md:items-start gap-y-6 justify-evenly">
                        //         <h3 className="text-center text-lg lg:text-2xl font-bold underline underline-offset-8">
                        //             {project.title}
                        //         </h3>
                        //         <h5 className="text-center md:text-left text-md lg:text-lg font-medium">
                        //             Team : {project.team.join(", ")}
                        //         </h5>
                        //         <div className="text-center md:text-left space-y-3">
                        //             <h6>Description</h6>
                        //             <p>
                        //                 Lorem ipsum dolor sit amet, consectetur
                        //                 adipisicing elit. Cumque, dignissimos?
                        //             </p>
                        //         </div>
                        //         <a
                        //             href={project.repoLink}
                        //             target="_blank"
                        //             rel="noreferrer"
                        //             className="underline underline-offset-4 decoration-teal-500 hover:text-teal-500 hover:decoration-white duration-200"
                        //         >
                        //             GitHub Repo Link
                        //         </a>
                        //     </div>
                        // </div>
                    );
                })}
                <div className="text-3xl text-white ">More Projects to Come . . .</div>
            </div>
        </div>
    );
};

export default Project;
