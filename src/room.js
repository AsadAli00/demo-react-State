import React, {useState} from 'react';
import './room.css'


function Room() {
    let [isLit,setLit] = useState(true);
    let [age,setAge] = useState(23);

    // function UpdateLit(){
    //     console.log("Button clicked");
    //     //isLit = !isLit;
    //     setLit(!isLit);
    //  }
    // function IncreaseAge(){
    //     console.log("Increase age")
    //     setAge(++age);
    // }

    // const IncreaseAge = () =>{
    //     console.log("Increase age")
    //     setAge(++age);
    // }
  
    return (
    <div className={`room ${isLit? "lit":"dark"}`}>
      This Room is {isLit? 'Lit': "Dark"}
      <br/>
      age = {age}
      <br/>
      <button onClick={() => setLit(!isLit)} >Toggle Light</button>
      <br/>
      <button onClick={() =>{
                        console.log("Increase age arrow function")
                        setAge(++age);
                      }} 
                      >Increase Age</button>
    </div>
  );
    
}

export default Room;
