import React,{useState}  from "react";
import PropTypes from 'prop-types'


function useInputvalue(defaultValue = ''){
    const [value,setValue] = useState(defaultValue)
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
       clear: () => setValue(''),
        value: () => value
    }
}

function AddMyAppItems({onCreate}){
 const input = useInputvalue('')

    function submitHandler(event){
        event.preventDefault()
        if(input.value().trim()){
            onCreate(input.value())
            input.clear()
        }
    }

return(
    <form action="" onSubmit={submitHandler}>
        <input type="text" {...input.bind}/>
        <input type="submit" className='subBtn'/>
    </form>
)
}

AddMyAppItems.propTypes = {
    onCreate:PropTypes.func.isRequired
}


export default AddMyAppItems
