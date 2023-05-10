import classes from "./Footer.module.css";



const Footer: React.FC = () => {




    return <div className={`h-1.5 flex justify-center py-3 text-xs`}>
        © {new Date().getFullYear()}
    </div>
};



export default Footer;