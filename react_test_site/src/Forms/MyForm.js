import { useState } from "react"

function MyForm (){
    // const [name,setName] = useState("")
    // const [age,setAge] = useState("")
    // const [email,setEmail] = useState("")
    //console.log('Current State',name);

    const [input, setInput] = useState({});

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
                <label>Enter your email: <input type="text" name="mail" onChange={handleChange}/></label> <br/>
                <label><input type="submit" value="Submit Form"/></label>
            </form>
        </>
    )
}

export default MyForm