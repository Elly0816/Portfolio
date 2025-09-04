import Link from "next/link";
import classes from "./Project.module.css";
import { Khand, Shrikhand, Inter } from "next/font/google";
import Image from "next/image";
import { Url } from "next/dist/shared/lib/router/router";

export interface projectType {
    img: string;
    tools: string[];
    source: string;
    demo: string | undefined;
    title: string;
    // description:string;
}

const khandFont = Khand({
    weight: "300",
    style: "normal",
    subsets: ["latin"],
});

const interFont = Inter({
    weight: ["100", "200"],
    style: "normal",
    subsets: ["latin"],
});

const shrik = Shrikhand({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

const marginInside = "my-3 mx-3";

const dimensions = {
    width: 15,
    height: 15,
};

const Project: React.FC<{ project: projectType }> = ({
    project,
}: {
    project: projectType;
}) => {
    // text-gray-800

    return (
        <div
            className={`${khandFont.className} ${classes.singleProject} 
${project.img && "text-gray-800"}
 w-full lg:w-3/4 h-1/4 lg:h-96 project rounded-lg flex flex-col hover:shadow-lg justify-center items-center `}
        >
            <div
                style={{
                    backgroundImage: `url(${project.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                className={`h-4/5 w-full ${classes.imageContainer}`}
            ></div>
            <div
                className={`${shrik.className} lg:text-2xl text-xs w-full px-2 justify-between text-center ${marginInside} flex flex-row gap-9 h-1/5
                //  overflow-hidden
                 `}
            >
                <h2 className={`justify-self-start`}>{project.title}</h2>

                <div className="whitespace-nowrap overflow-hidden">
                    <div
                        className={`gap-2 flex flex-row text-xs lg:text-base ${khandFont.className}
                    ${classes.marquee} inline-block
                    `}
                        // flex-wrap
                    >
                        {project.tools.map((tool, index) => (
                            <span key={index}>{tool}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className={`${interFont.className} text-xs lg:text-base flex flex-row`}
            >
                <button
                    type="button"
                    className={`${classes.links} text-slate-500 bg-gray-100 rounded-full mx-2`}
                >
                    <Link passHref legacyBehavior href={project.source}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex"
                        >
                            Source{" "}
                            <Image
                                className="mx-2"
                                {...dimensions}
                                src="/branches.png"
                                alt="source code"
                            />
                        </a>
                    </Link>
                </button>
                {project.demo && (
                    <button
                        type="button"
                        className={`${classes.links} text-slate-500 bg-gray-100 rounded-full mx-2`}
                    >
                        <Link passHref legacyBehavior href={project.demo}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex"
                            >
                                Demo{" "}
                                <Image
                                    className="mx-2"
                                    {...dimensions}
                                    src="/internet.png"
                                    alt="demo site"
                                />
                            </a>
                        </Link>
                    </button>
                )}
            </div>
            {/* <div
                className={`${classes.tools} flex flex-row flex-wrap text-base place-content-around justify-center`}
            >
                {project.tools.map((tool, index) => (
                    <button
                        type="button"
                        className={`rounded-full py-3 px-3  bg-slate-500 ${marginInside}`}
                        key={index}
                    >
                        {tool}
                    </button>
                ))}
            </div> */}

            {/* ${marginInside} */}
            {/* <div className={`flex flex-row text-lg`}>
                {project.demo && (
                    <button
                        type="button"
                        className={`${classes.links} text-slate-500 bg-gray-100 rounded-full mx-2`}
                    >
                        <Link className="flex" href={project.demo}>
                            Demo{" "}
                            <Image
                                className="mx-2"
                                {...dimensions}
                                src="/internet.png"
                                alt="demo site"
                            />
                        </Link>
                    </button>
                )}
                <button
                    type="button"
                    className={`${classes.links} text-slate-500 bg-gray-100 rounded-full mx-2`}
                >
                    <Link className="flex" href={project.source}>
                        Source{" "}
                        <Image
                            className="mx-2"
                            {...dimensions}
                            src="/branches.png"
                            alt="source code"
                        />
                    </Link>
                </button>
            </div> */}
        </div>
    );
};

export default Project;

// bg-slate-200
