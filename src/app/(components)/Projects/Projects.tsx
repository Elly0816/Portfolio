import { Fragment } from "react";
import Project, {type projectType} from "../Project/Project";
import projects from "@/app/(utilities)/Projects";
import { Shrikhand } from "next/font/google";

const shrik = Shrikhand({ 
    subsets: ['latin'],
    weight: '400',
    style: 'normal'
});


const Projects:React.FC = ()=>{



    return <Fragment>
            <div className={`${shrik.className} flex flex-col items-center justify-center md:text-6xl px-7 py-20 text-2xl`} id="projects">
                <div><h1>Projects</h1></div>
                <div className="py-10 flex flex-wrap flex-row justify-center">
                    {projects.map((project, index)=> <Project project={project} key={index}/>)}
                </div>
            </div>
            <hr />
           </Fragment>
    
}


export default Projects