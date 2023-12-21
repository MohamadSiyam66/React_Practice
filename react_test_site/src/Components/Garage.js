import Car from "./Car";
import Apple from "./Apple";

function Garage(){
    const brand = 'Ferrari';
    //const color = 'Red';
    return (
    <div>
        <Apple/>
        <h2>Who lives in my garage</h2>
        <Car brand = {brand} color = {'Red'}/>
        
    </div>
    )
}

export default Garage;