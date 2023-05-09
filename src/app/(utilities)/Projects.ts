import { type projectType } from "../(components)/Project/Project";



// const projects:projectType[] = [
//     {
//         img: '',
//         source: '',
//         tools: [''],
//         demo: undefined,
//         title: '1',
//         description:'desc 1'
//     }
// ]

const projects: projectType[] = []

for (let i=1; i<=10; i++){
    const proj:projectType = {
        img: `image ${[i]}`,
        source: `source ${i}`,
        tools: ['TypeScript', 'Python', 'React'],
        demo: `demo ${i}`,
        title: `title ${i}`,
        description: `description ${i}`
    }
    projects.push(proj);
}



export default projects;