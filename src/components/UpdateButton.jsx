import React from "react";

function UpdateButton({Update}){
    return(<div>
        <button className="update-button" onClick={Update}>Update Rates</button>
    </div>)
}

export default UpdateButton;