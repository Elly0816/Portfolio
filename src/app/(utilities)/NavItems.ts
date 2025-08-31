export interface navItem {
    name: string;
    href: string;
    current: boolean;
}

export const staticNav: navItem[] = [
    //   { name: 'Dashboard', href: '#', current: true },
    // { name: 'About', href: '#', current: false },
    { name: "Projects", href: "/#projects", current: false },
    { name: "Contact", href: "/#contact", current: false },
    // { name: "Blog", href: "/blog", current: false },
    // {name: 'Projects', href: '/projects', current: false},
];
