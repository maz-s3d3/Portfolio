
import Scene from "../3D modules/Scene";
const Welcoming =({theme,reversetheme,FirstName,LastName})=>{
        const Styles ={
            Outline:{
        webkitTextStroke:` 2px ${theme}`

            }
 
        }
        
    return(
        
            <div className="relative overflow-hidden w-full h-svh">
                <h1  className={` absolute mx-auto top-1/3 text-${reversetheme} justify-center uppercase text-5xl font-black  z-10 transition-all `}
                style={Styles.Outline}
                >Welcome to {FirstName} {LastName}'s portfolio</h1>
            </div>
        
    )

}
export default Welcoming