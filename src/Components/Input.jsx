const Input = (props) => {
  
    return (
    <div className="m-2 rounded-md w-[340px] flex flex-col items-center justify-center p-2">
      <div className="w-full flex">
        <div className=" mt-2 w-[45px] text-center bg-gradient-to-r from-blue-400 to-emerald-400 rounded-l-md">📕</div>
        <input type="text" placeholder="Add a Todo Item" value={props.inputValue} onChange={props.inputhandler}  className="border w-[93%] p-1 mr-2 mt-2 outline-none rounded-r-md " />
      </div>
    <button onClick={props.todohandler} className="m-3 p-1 w-[95%] border-2 border-black bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg text-lg">Add item 👍</button>
  </div>
    );
}
export default Input ;