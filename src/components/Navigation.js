import { useState, useEffect } from 'react';



function Navigation() {
    // name ->varaible setValue -> function to change the values
    let [name, setValue] = useState("one");
    let [age, setAge] = useState("24");
    //  useEffect(()=>{
    //      console.log('changes in Name');
    //  },[name]);
    //  useEffect working specifically for name only

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error=>console.log(error))
    },[])
    function changeValue() {
        setValue("Two");
    }
    function changeAge() {
        setAge("23");
    }
    return (
        <div>
            <h1>
                {name}
            </h1>
            <h1>
                {age}
            </h1>
            <button onClick={changeValue}>change</button>
            <button onClick={changeAge}>age</button>
        </div>
    )
}

export default Navigation;