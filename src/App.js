import { useEffect, useState } from 'react';
import {nanoid} from  'nanoid';
import NotesList from './components/NoteList';
import Search from './components/Search';
import Header from './components/Header';




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


 const[searchText,setSearchText] = useState('');

 const[darkMode,setDarkMode] = useState(false);

 // to retrive form local storage

 useEffect(()=>{
   const saveDNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
   );
   if(saveDNotes){
     setNotes(saveDNotes);
   }

 },[])


// to store in local storage So that page refresh dont remove
 useEffect(()=>{
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
    );

 },[notes]);//notes change relfected here on delete to 

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

};


  return (
         <div className={`${darkMode && 'dark-mode'}`}>
             <div className="container">
     
              <Header handleToggleDarkMode={setDarkMode}/>
              <Search handleSearchNote={setSearchText}/>
               <NotesList 
                 notes={notes.filter((note)=>
                 note.text.toLowerCase().includes(searchText)
      )}
          handleAddNote ={addNote}
          handleDeleteNote ={deleteNote}
         />
       </div>

     </div>

     
  );
};
export default App