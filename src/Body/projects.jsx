import { FaGithub } from "react-icons/fa";

export default function Projects({theme,reversetheme,projects}){

    return(
        <>
            {projects.map((project,index)=>(
                <div className={`relative bg-${reversetheme} text-${theme} w-80 h-fit my-5 rounded-xl group cursor-pointer p-3 transition-all hover:scale-110`} key={index}>
                    <img style={{
                        filter:""
                    }} className="rounded-t-xl backdrop-filter" src={project.image} alt="project" />
                    <h2 className="text-2xl font-bold my-2 ">{project.name}</h2>
                    <h3 className="text-xs font-mono">{project.description}</h3>
                    <p className="flex justify-start gap-4 text-gray-400 font-normal mt-2">{project.usedLanguages.map(e=><div>{e}</div>)}</p>
                    {project.links.map(e=>( 
                       <> <a
                        href={e.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`absolute top-1/3 left-1/2 z-10 invisible group-hover:visible hover:${
                            reversetheme === "black" ? "text-black" : "text-white"
                        }`}
                    >
                        <FaGithub size={20} />
                    </a>
                    
                    </>
                ))}
                   
                </div>
            ))}


        </>

    )
}