import { Fragment } from "react";
import Project, { type projectType } from "../Project/Project";
import projects from "@/app/(utilities)/Projects";
import { Shrikhand } from "next/font/google";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const shrik = Shrikhand({
    subsets: ["latin"],
    weight: "400",
    style: "normal",
});

const Projects: React.FC = () => {
    return (
        <div
            className={`${shrik.className} flex flex-col items-center justify-center md:text-6xl py-20 text-2xl`}
            id="projects"
        >
            <div>
                <h1>Projects</h1>
            </div>
            {/* <Carousel className="w-full max-w-xs"> */}
            <Carousel
                className="w-full max-w-6xl mt-3"
                opts={{ align: "center" }}
            >
                <CarouselContent className="flex px-4 mt-5 mb-4">
                    {projects.map((project, index) => (
                        <CarouselItem
                            key={project.title ?? index}
                            className="flex-none w-full lg:w-4/6 flex items-center justify-center"
                        >
                            <div className="p-1 w-4/5 max-w-full justify-center items-center flex">
                                <Project project={project} />
                            </div>
                        </CarouselItem>
                    ))}
                    {/* <Card>
    <CardContent className="flex aspect-square items-center justify-center p-6">
      <span className="text-4xl font-semibold">{index + 1}</span>
    </CardContent>
  </Card> */}
                </CarouselContent>
                <CarouselPrevious className="invisible lg:visible" />
                <CarouselNext className="invisible lg:visible" />
            </Carousel>
        </div>
    );
    // return (
    //     <Fragment>
    //         <div
    //             className={`${shrik.className}  flex flex-col items-center justify-center md:text-6xl px-7 py-20 text-2xl`}
    //             id="projects"
    //         >
    //             <div>
    //                 <h1>Projects</h1>
    //             </div>
    //             <div className="py-10 flex flex-wrap flex-row justify-center gap-10">
    //                 {projects.map((project, index) => (
    //                     <Project project={project} key={index} />
    //                 ))}
    //             </div>
    //         </div>
    //         <hr />
    //     </Fragment>
    // );
};

export default Projects;
