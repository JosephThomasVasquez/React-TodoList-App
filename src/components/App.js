import React, { useState } from 'react';
import Form from './Form';
import Item from './Item';

function App() {

  const [item, setItem] = useState("");

  function inputChange(e) {
    const inputVal = e.target.value;
    e.preventDefault();
  }

  function addItem(e) {
    console.log("Added Item");
    e.preventDefault();
  }

  return (
    <div className="App pt-5">
      <div className="container shadow">
      <h1 className="title-main">Todo List</h1>
      <Form onClick={addItem}/>
      <div>
        <Item />
      </div>
      </div>
    </div>
  );
}

export default App;
