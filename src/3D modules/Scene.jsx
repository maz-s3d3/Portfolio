import Cube from "../3D modules/Cube"
import Pyramid from "../3D modules/Pyramid"
import Cylinder from "../3D modules/Cylinder"
const Scene= ({theme , reversetheme})=>{
    return(
        <div className="">
      <Cube  baseColor={`${reversetheme}`} rotationSpeed={4} />
      <Pyramid baseColor={`${reversetheme}`} rotationSpeed={4} />
      <Cylinder initialHeight={256} initialWidth={128} baseColor={`${reversetheme}`} rotationSpeed={5}/>
        
        </div>
    )
}
export default Scene