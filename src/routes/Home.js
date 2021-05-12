import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreactors } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  
  function onChange(e) {
    setText(e.target.value); 
  }

  function onSubmit(e) {
    e.preventDefault();
    setText("");
    dispatch(addToDo(text));
    addToDo(text);
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {JSON.stringify(toDos)}
      </ul>
    </>
  )
}

function mapStateToProps(state){
  return { toDos: state };
};

function mapDispatchToProps(dispatch){
  return {
    addToDo: (text) => dispatch(actionCreactors.addToDo(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);