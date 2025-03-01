import { useState,useEffect } from "react";
import Header from "./Header/Header";
import Welcoming from './Body/Welcoming'
import AboutMe from "./Body/AboutMe/AboutMe";
import Projects from "./Body/projects";
import ContactForm from "./Body/contact";
import { projects,FirstName,LastName,Profile,Logo,LogoBlack } from "./data";

export default function App(){
    useEffect(() => {
        document.title = `${FirstName} ${LastName}'s Portfolio`;
    }, []);

    const [Theme, setTheme] = useState("black");
    const [OtherTheme, setOtherTheme] = useState("white");
        
        const getTheme = (theme) => {
          setTheme(theme);
          setOtherTheme(theme === "black" ? "white" : "black");           

        };
        


    return(
        <div className={`relative p-3 transition-colors bg-${Theme}`}>
            <Header FirstName={FirstName} LastName={LastName} getApp={getTheme} Logo={Logo} LogoBlack={LogoBlack}/>
            <Welcoming theme={Theme} reversetheme={OtherTheme} FirstName={FirstName} LastName={LastName}/>
            <AboutMe FirstName={FirstName} LastName={LastName} Profile={Profile} theme={Theme} reversetheme={OtherTheme}/>
            <div className="h-max py-32 flex flex-wrap justify-around"><Projects  theme={Theme} reversetheme={OtherTheme} projects={projects}/></div>
            <ContactForm theme={Theme} reversetheme={OtherTheme}/>
        </div>
    )
}



       









