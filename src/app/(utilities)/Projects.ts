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

const projects: projectType[] = [
    {
        title: "Chat App",
        tools: [
            "JavaScript",
            "React",
            "NodeJS",
            "ExpressJS",
            "socket.io",
            "mongoDB",
        ],
        demo: undefined,
        source: "https://github.com/Elly0816/Chat-App",
        img: "https://img.itch.zone/aW1nLzU2MTA3NTUucG5n/original/tcdxAa.png",
    },
    {
        title: "Online BlackJack",
        tools: [
            "JavaScript",
            "React",
            "NodeJS",
            "ExpressJS",
            "socket.io",
            "mongoDB",
        ],
        demo: undefined,
        source: "https://github.com/Elly0816/BlackJack",
        img: "https://media.istockphoto.com/id/156986944/photo/splitting-in-blackjack.webp?b=1&s=612x612&w=0&k=20&c=WhC5lJMO18JJ7rsPTI5vPVgefEI511KWNOzuJ0L2U08=",
    },
    {
        title: "Face Blur",
        tools: ["Python", "JavaScript", "Flask", "OpenCV", "React"],
        demo: undefined,
        source: "https://github.com/Elly0816/Face-Recognition",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iofEt5pMNQLhbjv-YIaxQVpfUUFk-Xc5UQ&s",
    },
    {
        title: "Live Currency Tracker",
        tools: ["TypeScript", "React", "Ant-Design"],
        demo: "https://stalwart-douhua-1870a6.netlify.app/",
        source: "https://github.com/Elly0816/Ant-Design-Repo",
        img: "https://raw.githubusercontent.com/Elly0816/Ant-Design-Repo/master/public/images/Currencies.jpeg",
        // img: "",
    },
    {
        title: "Email-like Messaging Application",
        tools: [
            "TypeScript",
            "React",
            "Ant-Design",
            "Express.js",
            "Material UI",
            "MongoDB",
            "Node.js",
            "Tailwind CSS",
        ],
        demo: "https://dazzling-empanada-1761d8.netlify.app/",
        source: "https://github.com/Elly0816/mail-client",
        // img: "https://raw.githubusercontent.com/Elly0816/Ant-Design-Repo/master/public/images/Currencies.jpeg",
        img: "https://yes-himconsulting.com/wp-content/uploads/2020/04/mail.webp",
    },
    {
        title: "Expense Tracking App",
        tools: [
            "TypeScript",
            "React",
            "Ant-Design",
            "Bun",
            "Hono",
            "PostgreSQL",
        ],
        demo: "https://expense-app-client-pi.vercel.app/",
        source: "https://github.com/Elly0816/expense-app-server",
        img: "https://poonawallafincorp.com/documents/d/poonawalla-fincorp/loan-for-job-expenses-webp?download=true",
    },
];

export default projects;
