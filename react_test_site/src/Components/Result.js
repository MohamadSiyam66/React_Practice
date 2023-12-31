import React from "react";

function Result ({secNum, term}){
let result;

if(term){
    if (term > secNum){
        result='Higher'
    }else if(term < secNum){
        result='Lower'
    }else if(term == secNum){
        result='You are Correct!'
    }else{
        result="Enter valid input"
    }
}

    return (
        <>
            <h3>You Guessed: {result} </h3>
        </>
    )
}

export default Result