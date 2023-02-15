const Delete = (props) => {
    return (
        <div className=" m-2 mt-3 w-[340px] border-2 rounded-md border-black text-lg text-center">
    <p className="bg-red-500  font-noto rounded-sm hover:cursor-pointer" onClick={()=>{
      props.deleteall(true);
    }}>
      Clear All
    </p>
  </div> 
    )
}
export default Delete ;
