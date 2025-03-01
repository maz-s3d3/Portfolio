import Skills from './Skills/Skills'
const AboutMe = ({FirstName,LastName,Profile, theme,reversetheme})=>{

    return(
        <>
            <div className='flex justify-around transition-all'>
                <div >
                    <img style={{maxHeight:"90vh"}} className="rounded-md max-h-96" src={Profile} alt="Profile" />
                </div>
                <div className={`max-w-xl p-3 text-${reversetheme} font-bold text-2xl`}>
                    Hello! I'm {LastName} {FirstName}, a passionate and dedicated full-stack web developer currently in my second year of study at OFPPT. With a strong foundation in both Front-end and Back-end technologies, I enjoy building dynamic, user-friendly websites and applications.
                    Beyond my studies, I’m constantly exploring new tools and frameworks to enhance my skills. I also have a keen interest in cloud storage and website hosting, which led me to develop Argan Beauty, a project focused on seamless online services.
                    I'm looking to apply my knowledge in a real-world environment, collaborate with experienced developers, and further refine my expertise. If you're looking for a motivated and fast-learning intern, let's connect! 
            </div>
            
            </div>
            <div>
                <Skills theme={theme} reversetheme={reversetheme} />
            </div>
        </>
    )
}
export default AboutMe