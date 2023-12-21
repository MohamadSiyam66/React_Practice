function Car(props){
    const { brand, color } = props
    const text = `Hi, I am a ${color} ${brand} Car`;
    return(
        <h2> {text} </h2>
    );
}

export default Car;