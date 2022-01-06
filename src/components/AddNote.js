import { useState } from "react";

const AddNote = ({handleAddNote}) =>{
    const [noteText,setNoteText] = useState('');
    const handleChange = (event)=>{
        //   console.log(event.target.value);
        setNoteText(event.target.value);
    };
    const handleSaveClick =() =>{    // saving note/update top state 
       handleAddNote(noteText);// from app to here to change state
    }

    return( 
           <div className="note new">
            <textarea 
               cols="8"
               rows="10"
               placeholder="type to note"
               value={noteText}
               onChange={handleChange}
               ></textarea>
         <div className="note-footer">
            <small>200 words left</small>
            <button className="save" onClick={handleSaveClick} >Save</button>
         </div>
         
           </div>
         );

};
export default AddNote;