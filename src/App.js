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

}


  return <div className="container">
    <NotesList notes={notes} handleAddNote ={addNote}/>
  </div>
};
export default App