import Car from "./Car";
import Apple from "./Apple";

function Garage(){
    //const brand = 'Ferrari';
    //const color = 'Red';
    const carInfo = {brand: "Ferreri" ,color: "Red" } 
    //const carInfo = {}
    const appleInfo = {type:"Fuji", color: "Red"}
    const carList = [
    {brand:"bmw", color:"red"},
    {brand:"ford", color:"green"},
    {brand:"tesla", color:"pink"}
    ];
    const alphebets = [
        'a','b','c','d','e','f','g'
    ];

    return (
    <>
        <Apple appleInfo={appleInfo}/>
        <h2>Who lives in my garage</h2>
        {/* <Car brand = {brand} color = {'Red'}/> */}
        { carInfo.brand !== undefined && carInfo.color !== undefined ?
        <Car carInfo={carInfo}/> : null
        }

        <ul>
            {carList.map((car)=> <li key={carInfo.brand}> <Car carInfo={car}/> </li> ) }
        </ul>
        <ul>
            {alphebets.map((alph,index)=> <p key={index}> {alph} </p>) }
        </ul>
        
    </>
    )
}

export default Garage;