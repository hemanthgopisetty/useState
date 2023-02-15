const List = (props) => {

  const items = props.todo.map((element,key)=>{
   return <p key={key} className="p-1  m-2  bg-gradient-to-r from-blue-400 to-emerald-400 rounded-md flex justify-between border-2 border-black">{element}<span onClick={()=>{props.deletehandler(element)}} className="hover:cursor-pointer">🗑</span></p>
  })
    return (
    <div className=" m-2 w-[340px] rounded-md text-lg">
        {items}
  </div>
    )
}
export default List ;