import classes from'./Project.module.css';
import { Khand, Shrikhand } from 'next/font/google';

export interface projectType {
    img: string;
    tools: string[];
    source: string;
    demo:string|undefined;
    title:string;
    description:string;
}

const khandFont = Khand({
    weight: "300",
    style: 'normal',
    subsets: ['latin']
});


const shrik = Shrikhand({
    weight: '400',
    style: 'normal',
    subsets: ['latin']
});




const Project: React.FC<{project: projectType}> = ({project}:{project:projectType}) => {



return <div style={{backgroundImage: project.img}} className={`${khandFont.className} ${classes.singleProject} w-96 h-96 project rounded-lg flex flex-col py-3 px-3 border-solid border-black shadow-lg my-4 mx-3`}>
        <div className={`${shrik.className} text-xl`}>
            <h3>{project.title}</h3>
        </div>
        <div className='text-base'>
            <p>{project.description}</p>
        </div>
</div>

}


export default Project;

// bg-slate-200