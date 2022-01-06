import { useState } from 'react';
import {nanoid} from  'nanoid';
import NotesList from './components/NoteList';



const App = () =>{
  const [notes , setNotes] = useState([
    {
    id:nanoid(),
    text:"First start 1",
    date:"12/12/12",

  },
    {
    id:nanoid(),
    text:"First start 2",
    date:"12/12/12",

  },
    {
    id:nanoid(),
    text:"First start 3 ",
    date:"12/12/12",

  },
]);

const addNote = (text) =>{
  // console.log(text); check 
  const date = new Date();
  const newNote = {
    id:nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes,newNote];//spread ... add old and new and create new array 
   setNotes(newNotes);
};
const deleteNote =(id)=>{
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);

}


  return (<div className="container">
    <NotesList 
    notes={notes}
     handleAddNote ={addNote}
     handleDeleteNote ={deleteNote}
     />
  </div>
  );
};
export default App