import Link from 'next/link';
import classes from'./Project.module.css';
import { Khand, Shrikhand } from 'next/font/google';
import Image from 'next/image';

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



const marginInside = 'my-3 mx-3';

const dimensions = {
    width: 25,
    height: 20,
}

const Project: React.FC<{project: projectType}> = ({project}:{project:projectType}) => {
 



return <div style={{backgroundImage: `url(${project.img})`}} className={`${khandFont.className} ${classes.singleProject} w-96 h-96 project rounded-lg flex flex-col py-3 px-3 border-solid border-black shadow-lg my-4 mx-3 place-content-between`}>
        <div className={`${shrik.className} text-4xl justify-center text-center ${marginInside}`}>
            <h2>{project.title}</h2>
        </div>
        <div className={`text-lg  ${marginInside}`}>
            <p>{project.description}</p>
        </div>
        <div className={`${classes.tools} flex text-base place-content-around`}>
            {project.tools.map((tool, index) => <button type='button' className={`rounded-full py-3 px-3 text-white bg-slate-500 ${marginInside}`} key={index}>{tool}</button>)}
        </div>
        <div className={`${marginInside} flex place-content-around text-lg`}>
            {project.demo && <button type='button' className={`${classes.links} text-slate-500 bg-gray-100 rounded-full`}><Link className='flex' href={project.demo}>Demo <Image className='mx-2' {...dimensions} src='/internet.png' alt='demo site'/></Link></button>}
            <button type='button' className={`${classes.links} text-slate-500 bg-gray-100 rounded-full`}><Link className='flex' href={project.source}>Source <Image className='mx-2' {...dimensions} src='/branches.png' alt='source code'/></Link></button>
        </div>
</div>

}


export default Project;

// bg-slate-200