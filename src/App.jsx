import Input from "./Components/Input";
import List from "./Components/List";
import Delete from "./Components/Delete";
import { useState } from "react";
const App = () =>{
  const [inputValue,setInput] = useState('');
  const [todoitems,setTodo] = useState([]);

  const handleinput = (event) => {
    event.preventDefault();
    setInput(event.target.value);
    console.log(typeof event.target.value);
  };
  const addtodo = (e) =>{
    e.preventDefault();
    if(inputValue !== '')setTodo([...todoitems,inputValue]);
    console.log(typeof inputValue);
  }
  const deleter = (element) => {
    const templist=todoitems.filter((task)=>{
      return task!== element ;
    })
    //Set the empty list and see the initial value of this state
      setTodo([...templist]);
  }
  const emptytodo = (boolval) =>{
      if(boolval === true) setTodo([]);
  }
  return( 
    <>
     {/* Heading */}
  <h1 className="mb-2 font-semibold text-xl text-center">Todo Input</h1>
  <div className="flex items-center justify-center flex-col">
  {/* Input and Button */}
    <Input
      input={inputValue}
      inputhandler={handleinput}
      todohandler={addtodo}
    />
  {/*Display the list of the todo's */}
  <List
    todo={todoitems}
    deletehandler = {deleter}
  />
  {/* Delete the list */}
  <Delete
  deleteall={emptytodo}
  />
</div>
    </>
  )
}
export default App;