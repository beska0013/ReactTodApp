import React from "react";
import PropTypes from 'prop-types';
import MyAppItems from "./MyAppItems";

const _ulStyle = {
    ul:{
        listStyle:'none',
        padding: 0,
        margin: 0,
    }
}

 function MyApp(props){
    return(
        <ul style={_ulStyle.ul}>
            {props.items.map((item,i) => {
            return <MyAppItems
                item = {item}
                key = {item.id}
                index = {i}
                onChange={props.onToggle}/>
            })}
        </ul>
    )
}
MyApp.propTypes = {
 items: PropTypes.arrayOf(PropTypes.object).isRequired,
 onToggle: PropTypes.func.isRequired

}


export default MyApp
