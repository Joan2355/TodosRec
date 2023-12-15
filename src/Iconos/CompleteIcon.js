import React from "react";
import { BsClipboardCheckFill } from "react-icons/bs";

function CompleteIcon ( { completed , onComplete} ) {
    return (
    <BsClipboardCheckFill 
    className= "Icon Icon-check"
    type ="check"
    color= { completed ? "green" : "gray" }
    onClick={onComplete}
    
    />
    );
}

export { CompleteIcon };