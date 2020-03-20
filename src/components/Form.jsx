import React from 'react';
import App from './App';

function Form(props) {
    return (<form className="user-form">
        <input className="input-item" type="text" onChange={props.onChange} value={props.value} placeholder="Add Item"/>
        <button onClick={props.onClick}>Add</button>
    </form>);
}

export default Form;