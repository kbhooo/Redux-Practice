import { creatStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = creatStore(countModifier);

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());