import React from 'react';
import App from './App';
import AddBoxIcon from '@material-ui/icons/AddBox';

function Form(props) {
    return (<form className="user-form">
        <input className="input-item" type="text" onChange={props.onChange} value={props.value} placeholder="Add Item"/>
        <button onClick={props.onClick}><AddBoxIcon fontSize="Large"/></button>
    </form>);
}

export default Form;