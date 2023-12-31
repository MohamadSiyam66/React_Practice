import { useState } from "react"

function Bike (){
    // const [color, setColor] = useState("Red")
    // const [brand, setBrand] = useState("Hero")
    // const [model, setModel] = useState("Deluxe")
    // const [year, setYear] = useState("2019")

    const [bike, setBike] = useState(
        {
            color: "Red",
            brand: "Hero",
            model: "Deluxe",
            year: "2019"
        }
        )
    
    function updateColor(){
        setBike(previousState => {
            return {
                ...previousState, color: "Purple"
            }
        })
    }

    return(
    <>
    <h1>My Bike</h1>
    <p>Color: {bike.color}</p>
    <p>Brand: {bike.brand}</p>
    <p>Model: {bike.model}</p>
    <p>Year: {bike.year}</p>
    <button onClick={updateColor}>Change Color</button>
    </>
    )
    
}

export default Bike