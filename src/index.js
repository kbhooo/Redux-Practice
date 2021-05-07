import { creatStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("span");

const countModifier = (state = 0) => {
  return state;
}

const countStore = creatStore(countModifier);

console.log(countStore.getState());