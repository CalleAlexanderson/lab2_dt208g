import { todoList } from "./todo";

console.log("heel");

let to1 = new todoList("Fixa tvätten", false, 2);
let to2 = new todoList("Fixa disken", true, 1);
let to3 = new todoList("rensa kylen", false, 3);
let to4 = new todoList("handla", false, 1);
let to5 = new todoList("servica bilen", false, 5)

let toArr: todoList[] = [to1, to2, to3, to4, to5];

console.log(toArr);

const form = document.getElementById('example-form') as HTMLFormElement;

form.onsubmit = (event) => {
  event.preventDefault();
  
  console.log("formulär inlämmat");
};