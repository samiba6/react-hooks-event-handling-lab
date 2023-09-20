// Code Keypad Component Here
import React from 'react';
export default function Keypad (){
    function handleChange() {
        console.log("Entering password...");
      }
    
    return (
        <div>
            <p> test</p>
            <label htmlFor="userInput">Enter password: </label>
      <input type="password"  onChange={handleChange} id="userInput" />
        </div>
    )
}

