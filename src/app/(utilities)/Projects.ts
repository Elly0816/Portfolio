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

for (let i=1; i<=5; i++){
    const proj:projectType = {
        img: `https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        source: `https://github.com/Elly0816/Portfolio/blob/master/src/app/page.tsx`,
        tools: ['TypeScript', 'Python', 'React'],
        demo: `https://stalwart-douhua-1870a6.netlify.app/`,
        title: `title ${i}`,
        description: `description ${i}`
    }
    projects.push(proj);
}



export default projects;