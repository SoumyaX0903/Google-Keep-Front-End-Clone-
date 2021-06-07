import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange={props.handle} name="title" placeholder="Title" value={props.inptitle}/>
        <textarea onChange={props.handle} name="content" placeholder="Take a note..." rows="3" value={props.inpcontent} />
        <button onClick={props.clickhandle} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
