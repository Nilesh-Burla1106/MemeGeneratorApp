import React,{useState} from "react";

import Draggable from "react-draggable";

const Text = () => {

    const [editmode, setEditMode] = useState(false);

    const [value, setValue] = useState("Double Click to Edit")
    return(
        <Draggable>
        {
            editmode? (
                <input style={{fontSize:"10px"}} onDoubleClick={(e) => setEditMode(false)} value={value} onChange={(e) => setValue(e.target.value)}/>
            ) : (
                <h1 onDoubleClick={(e) => setEditMode(true)}>{value}</h1>
            )
        }
        </Draggable>
    )
}

export default Text;