import { useState,useEffect } from "react";
import Header from "./Header/Header";
import Welcoming from './Body/Welcoming'
import AboutMe from "./Body/AboutMe/AboutMe";
import Skills from "./Body/AboutMe/Skills/Skills.jsx";
import Projects from "./Body/projects";
import ContactForm from "./Body/contact";
import Footer from "./Footer/Footer";
import ParticleScene from "./Particles";
import { projects,FirstName,LastName,Profile,Logo,LogoBlack } from "./data";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



const theme = createTheme({
  // Customize your theme colors here
  palette: {
    primary: {
      main: '#2196F3', // Blue
    },
    secondary: {
      main: '#3f51b5', // Indigo
    },
  },
});

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
        <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className={`relative p-3 transition-colors bg-${Theme}`}>
            <ParticleScene reversetheme={OtherTheme}/>
            <div className="relative z-10">
            <Header FirstName={FirstName} LastName={LastName} getApp={getTheme} Logo={Logo} LogoBlack={LogoBlack}/>
            <Welcoming theme={Theme} reversetheme={OtherTheme} FirstName={FirstName} LastName={LastName}/>
            <AboutMe FirstName={FirstName} LastName={LastName} Profile={Profile} theme={Theme} reversetheme={OtherTheme}/>
            <Skills theme={Theme} reversetheme={OtherTheme}/>
            <div className="h-max py-32 flex flex-wrap justify-around"><Projects  theme={Theme} reversetheme={OtherTheme} projects={projects}/></div>
            <ContactForm theme={Theme} reversetheme={OtherTheme}/>
            <Footer FirstName={FirstName} LastName={LastName}/>
        </div>
        </div>
        </ThemeProvider>
    )
}






       









