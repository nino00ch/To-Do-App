// const input = document.querySelector("input");
// const btn = document.querySelector("button");
// const todolist = document.querySelector("ul");
// function Addtodo() {
    

// btn.addEventListener("click", (e) => {
//   console.log(input.value);
//   const todo = input.value;
//   const newTodo = document.createElement("li");
//   newTodo.textContent = todo;
//   todolist.appendChild(newTodo);
//   input.value = "";
// });


// const deletebtn = document.querySelectorAll("deletebtn");
// deletebtn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   todolist.removeChild(newTodo);
// });
// }
// input.addEventListener("keypress", (e) => {
//     console.log("key pressed");
  
//     if (e.key === "Enter") {
//       btn.click();
//     }
//   });
// //   function Addtodo (){
// //     btn.addEventListener("click", Addtodo);
// //     input.addEventListener("keypress", (e) => {
// //         (e.key === "Enter") {
// //             Addtodo();
// //         }
// //     })
// //   }
const input= document.getElementById("new-todo");
    const btn=document.getElementById("add-btn");
    const todolist=document.getElementById("todo-list");
    //function to add newtodo
    function addTodo(){
        const todo =input.value.trim(); 
        if(todo === "") return;

    const newTodo =document.createElement("li");
        newTodo.innerHTML=`
        <span>${todo}</span>
        <button class="delete-btn">X</button>
        `;
        console.log(newTodo);
        
        todolist.appendChild(newTodo);
        input.value ="";
        //add togg
     newTodo.addEventListener("click", () => {
        newTodo.classList.toggle("completed");
     });
    
     const deleteBtn = document.querySelector(".delete-btn");
     deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        todolist.removeChild(newTodo);
     });
    }

    btn.addEventListener("click",addTodo);

    input.addEventListener("keypress",(e) => {
       if  (e.key==="Enter"){
        addTodo();
       }
    });