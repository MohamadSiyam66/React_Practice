import { useState } from "react"
function Fcolor (){
    //const color = 'red';
    //let color = 'Blue';
    const [color, setColor] = useState('Blue')
    return (
        <>
            <h1> My Fav color is {color}</h1>
            <button onClick={()=> {setColor('Red')}}>Color Change</button>
        </>
    )
}
export default Fcolor