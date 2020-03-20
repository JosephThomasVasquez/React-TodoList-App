import React, { useState } from 'react';
import Form from './Form';
import Item from './Item';

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function inputChange(e) {
    const inputVal = e.target.value;

    setInputText(inputVal);
  };

  function addItem(e) {
    setItems(previousItems => {
      return [...previousItems, inputText];
    });

    setInputText("");
    e.preventDefault();

  };

  return (
    <div className="App pt-5">
      <div className="container shadow">
      <h1 className="title-main">Todo List</h1>
      <Form onChange={inputChange} onClick={addItem} value={inputText}/>
      <div>
        <ul>
          {items.map((newItem, index) => (
            <Item key={index} id={index} text={newItem} onChecked=""/>
            ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
