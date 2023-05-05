import classes from'./Project.module.css';

export interface projectType {
    img: string;
    tools: string[];
    source: string;
    demo:string|undefined
}




const Project: React.FC<{project: projectType}> = ({project}:{project:projectType}) => {



return <div className='box-border h-32 p-4 border-4'>

</div>

}


export default Project;