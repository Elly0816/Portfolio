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

// const projects: projectType[] = []

// for (let i=1; i<=5; i++){
//     const proj:projectType = {
//         img: `https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
//         source: `https://github.com/Elly0816/Portfolio/blob/master/src/app/page.tsx`,
//         tools: ['TypeScript', 'Python', 'React'],
//         demo: `https://stalwart-douhua-1870a6.netlify.app/`,
//         title: `title ${i}`,
//         description: `description ${i}`
//     }
//     projects.push(proj);
// }


const projects:projectType[] = [
    {
        title: 'Chat App',
        tools: ['JavaScript', 'React', 'NodeJS', 'ExpressJS', 'socket.io', 'mongoDB'],
        demo: undefined,
        source: 'https://github.com/Elly0816/Chat-App',
        img: ''
    },
    {
        title: 'Online BlackJack',
        tools: ['JavaScript', 'React', 'NodeJS', 'ExpressJS', 'socket.io', 'mongoDB'],
        demo: undefined,
        source: "https://github.com/Elly0816/BlackJack",
        img: ""
    },
    {
        title: 'Face Blur',
        tools: ["Python", "JavaScript", "Flask", "OpenCV", "React"],
        demo: undefined,
        source: "https://github.com/Elly0816/Face-Recognition",
        img: ""
    },
    {
        title: 'Live Currency Tracker',
        tools: ['TypeScript', 'React', 'Ant-Design'],
        demo: 'https://stalwart-douhua-1870a6.netlify.app/',
        source: "https://github.com/Elly0816/Ant-Design-Repo",
        img: 'https://raw.githubusercontent.com/Elly0816/Ant-Design-Repo/master/public/images/Currencies.jpeg'
    },
    {
        title: 'Email Like Messaging Application',
        tools: ['TypeScript', 'React', 'Ant-Design', 'Express.js', 'Material UI','MongoDB', 'Node.js', 'Tailwind CSS'],
        demo: 'https://dazzling-empanada-1761d8.netlify.app/',
        source: "https://github.com/Elly0816/mail-client",
        // img: 'https://raw.githubusercontent.com/Elly0816/Ant-Design-Repo/master/public/images/Currencies.jpeg'
        img: ''
    }

]


export default projects;