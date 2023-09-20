// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  // Event handler for the "focus" event
  function handleFocus() {
    console.log("Good!");
  }

  // Event handler for the "blur" event
  function handleBlur() {
    console.log("Hey! Eyes on me!");
  }

  return (
    <button onFocus={handleFocus} onBlur={handleBlur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;