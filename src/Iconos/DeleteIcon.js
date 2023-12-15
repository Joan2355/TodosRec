import React from "react";
import { BsClipboard2XFill } from "react-icons/bs";

function DeleteIcon ({onDelete}){
    return (
        <BsClipboard2XFill
        className= "Icon Icon-delete"
        type ="delete"
        onClick={onDelete}
    
        />
    );
}

export { DeleteIcon };