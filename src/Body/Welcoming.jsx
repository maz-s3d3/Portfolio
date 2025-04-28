
import Scene from "../3D modules/Scene";
const Welcoming =({theme,reversetheme,FirstName,LastName})=>{
        const Styles ={
            Outline:{
        webkitTextStroke:` 2px ${theme}`

            }
 
        }
        
    return(
        
            <div className="relative overflow-hidden w-full h-svh">
                {/* <div className="absolute left-1/3 blur-sm"><Scene theme={theme} reversetheme={reversetheme}/></div>  */}
                <h1  className={` absolute mx-10 top-1/3 text-${reversetheme} uppercase text-5xl font-black  z-10 transition-all `}
                style={Styles.Outline}
                >Welcome to {FirstName} {LastName}'s portfolio</h1>
            </div>
        
    )

}
export default Welcoming