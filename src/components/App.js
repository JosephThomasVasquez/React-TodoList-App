import React, { useState } from 'react';
import Form from './Form';
import Item from './Item';
import AssignmentIcon from '@material-ui/icons/Assignment';

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

  function deleteItem(id) {
    setItems(previousItems => {
      return previousItems.filter((selectedItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App pt-5">
      <div className="container shadow">
      <h1 className="title-main"><AssignmentIcon fontSize="Large" style={{color: "rgba(255, 255, 255, 0.5)"}}/>Todo List</h1>
      <Form onChange={inputChange} onClick={addItem} value={inputText}/>
      <div>
        <ul>
          {items.map((newItem, index) => (
            <Item key={index} id={index} text={newItem} onChecked={deleteItem}/>
            ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
