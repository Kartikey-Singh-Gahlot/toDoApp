import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./output.css";

export default function App() {
 
  let [val, setVal] = useState("");
  function handleChange(e){
   setVal(e.target.value);
  }

  let [items, setItems] = useState([]);
  function trgrAdd(){
   setItems((prev)=>{return [...prev, {content:val, id:uuidv4(), case:0}]});
   setVal("");
  }

  function trgrDelete(idx){ 
   setItems((prev)=>{ return [...prev.filter((i)=>{ return i.id != idx })]})
  }

  function trgrClear(){
    setItems([]);
  }

  function trgrCaseChange(){
    setItems((prev)=>{ return [...prev.map((i)=>{
       if(i.case != 1){
         return {...i,content:i.content.toUpperCase(), case:1 };
       }
       else{
         return {...i,content:i.content.toLowerCase(), case:0 };
       }
     })]})
  }


  return (
    <div className='h-screen bg-[burlywood] flex flex-col gap-10'>   
         <h1 className='sm:text-3xl text-2xl text-center mt-10'>Whats Your Plan Today?</h1>
         <div className='w-full flex  flex-col  items-center justify-center gap-5'>
               <input className='hover:bg-black hover:text-amber-50 border-[1px] border-black text-center w-[60vw] h-10 rounded-[40px]' value={val} onChange={handleChange}/>
               <div className='flex w-full justify-center gap-5'>
                  <button  className=" hover:bg-[burlywood] text-amber-50 bg-black hover:text-black border-[1px] border-black py-0.5 px-2 rounded-[10px_10px]" onClick={trgrAdd}>Add Task</button>
                  <button  className=" hover:bg-[burlywood] text-amber-50 bg-black hover:text-black border-[1px] border-black py-0.5 px-2 rounded-[10px_10px]" onClick={trgrClear}>Clear All</button>
                  <button  className=" hover:bg-[burlywood] text-amber-50 bg-black hover:text-black border-[1px] border-black py-0.5 px-2 rounded-[10px_10px]" onClick={trgrCaseChange}>aA</button>
                </div>
               <ul className='list-decimal'>
                {items.map((i)=>{ return <div className='flex justify-center'> <li className=' break-words overflow-wrap hover:bg-transparent hover:text-black border-b-black border-b-[2px] relative justify-between text-black w-[50vw] px-2 text-left py-1 my-1'>{i.content}</li> <button  onClick={()=>{trgrDelete(i.id)}} className=' hover:text-red-600  rounded-2xl  px-3 text-black text-[20px] h-full top-0 text-center font-semibold'>x</button> </div> })}
               </ul>
               
         </div> 
    </div>
  )
}


