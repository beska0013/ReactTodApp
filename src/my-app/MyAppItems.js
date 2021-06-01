import React,{useContext} from "react";
import PropTypes from 'prop-types';
import Context from "../contxt/contxt";



const _liStyle ={
    li:{
        padding:'1rem',
        margin:'1rem 0',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        border:'1px solid #424242',
        borderRadius:'5px'
    },
    span:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-end'

    },
    strong:{
      letterSpacing:'1px'
    },
    p:{
        width:'30em',
        margin: '0'
    }
}

 function MyAppItems({item, index, onChange}){
    const{removeItem} = useContext(Context)
   const classes =[]
     if(item.completed){
         classes.push('completed')
     }

    return(
        <li style={_liStyle.li}>
           <span style={_liStyle.span} className={classes.join(' ')}>
                <input type="checkbox"
                       checked={item.completed}
                       style={_liStyle.input}
                       onChange = {() => onChange(item.id)}/>
            <strong style={_liStyle.strong}>
                {index + 1}.
            </strong>
           <p style={_liStyle.p}>{item.title}</p>
               </span>
            <button className='itmBtn' onClick={removeItem.bind(null,item.id)}>&times;</button>
        </li>

    )
}
MyAppItems.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}
export  default MyAppItems
