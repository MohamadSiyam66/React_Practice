import { useState } from "react"

function MyForm (){
    // const [name,setName] = useState("")
    // const [age,setAge] = useState("")
    // const [email,setEmail] = useState("")
    //console.log('Current State',name);

    const [input, setInput] = useState({phone: "+94", about : "I am a"});

    function handleSubmit(e){
        e.preventDefault();
        console.log('Form Submitted');
        //console.log('Current State',name,age,email);
        console.log('Current State',input);
    }

    function handleChange (e){
        //setInput ( (pre_stat)=> {return ({...pre_stat, name: e.target.value})} )
        const name = e.target.name
        const value = e.target.value
        setInput ( (prev_stat)=> { return {...prev_stat,[name] : value }})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <label>Enter your name: <input type="text" onChange={(e) => {setName(e.target.value)}}/></label>
                <label>Enter your age: <input type="text" onChange={(e) => {setAge(e.target.value)}}/></label>
                <label>Enter your email: <input type="text" onChange={(e) => {setEmail(e.target.value)}}/></label> */}

                <label>Enter your name: <input type="text"  name="name" onChange={handleChange}/></label> <br/>
                <label>Enter your age: <input type="text" name="age" onChange={handleChange}/></label> <br/>
                <label>Enter your email: <input type="text" name="mail" value={input.email} onChange={handleChange}/></label> <br/>
                <label>Enter your phone: <input type="text" name="phone" value={input.phone} onChange={handleChange}/></label> <br/>
                <label>Select your country: 
                    <select type="text" name="country" value={input.country} onChange={handleChange}>
                        <option value={""}>...Select</option>
                        <option value={"India"}>India</option>
                        <option value={"USA"}>USA</option>
                        <option value={"Sri Lanka"}>Sri Lanka</option>
                        <option value={"Japan"}>Japan</option>
                    </select>
                    </label> <br/>
                    <label>Tell about you:<br/> <textarea type="text" name="about" value={input.about} onChange={handleChange}/></label> <br/>
                <label><input type="submit" value="Submit Form"/></label>
            </form>
        </>
    )
}

export default MyForm