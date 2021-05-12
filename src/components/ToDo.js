import React from "react"
import { actionCreactors } from "../store";

function ToDo( text, onBtnClick ){
  return (
    <li>
      {text} <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    onBtnClick: () => dispatch(actionCreactors.deleteToDo(ownProps.id))
  };
}

export default connenct(null, mapDispatchToProps) (ToDo);