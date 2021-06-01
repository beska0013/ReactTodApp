import React from "react";







export  default () =>
    <div style={_loaderstyle}>
        <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

const _loaderstyle = {
    display:'flex',
    justifyContent:'center',
    margin:'.5rem'
}
