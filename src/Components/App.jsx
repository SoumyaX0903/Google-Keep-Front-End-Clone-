import React from "react"
import Head from "./Header"
import Note from "./Note"
import Foot from "./Footer"
import notear from "./../notes"
import Create from "./CreateArea"
function App()
{
const [input,setinput]=React.useState({
    title:"",
    content:""
})
const [arr,setarr]=React.useState(notear)
function handleChange(event)
{
    let name=event.target.name;
    let value=event.target.value;
    setinput((prev)=>{
        if(name==="title")
        {
            return{
                title:value,
                content:prev.content
            }
        }
        else 
        {
            return{
                title:prev.title,
                content:value
            }
        }
    })
}
function handleSubmit(event)
{
let l=arr.length;
let obj={key:l+1,title:input.title,content:input.content}
setarr((prev)=>{
  return  [...prev,obj];
});
setinput({
        title:"",
        content:""
    })
event.preventDefault();
}
function handleDelete(index)
{
setarr((prev)=>{
   return  prev.filter((x,i)=>
{
    return prev[i].key!==index
})
})
}

return (<div>

<Head/>
<Create handle={handleChange}
inptitle={input.title}
inpcontent={input.content}
clickhandle={handleSubmit}
/>

{arr.map((obj)=>
{
    return <Note key={obj.key} id={obj.key} title={obj.title} content={obj.content} handleDelete={handleDelete}/>
})
}
<Foot/>
</div>
)
}
export default App;