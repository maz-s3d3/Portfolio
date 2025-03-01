import {Framework,Languages} from 'C:/Users/saad/Desktop/html Projects/React/my-portfolio/src/data.js'
import Level from './Level'
export default function Skills({theme,reversetheme}){

    return(
        <><div className='my-5'>
                    <table>
                        <thead>
                            <tr>
                                <th className={`text-${reversetheme}`}>Language</th>
                                <th className={`text-${reversetheme}`}>Frameworks</th>
                                <th></th>
                            </tr></thead>
            {Languages.map(e=>(
                        <tr>
                            <td width="800px">
                                <h2 className={`text-3xl text-${reversetheme} font-bold`}>{e.name}</h2>
                            <Level theme={theme} reversetheme={reversetheme} level={e.level}/>
                            </td>
                            <td>
                                
                            </td>
                        
                        </tr>
                   
            ))} </table>
                    
                </div>
        </>
    )
}