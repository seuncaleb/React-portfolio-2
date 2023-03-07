
import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
// set states to be used in both main and sidebar
  const [journal, setJournal] = useState([]);
// function to serve on click adding note to the side bar 
 const addNote = () => {

  // object to house all new entry
  const newJournal = {

    id: uuid(),
    title: "untitled",
    body: "",
    lastModified: Date.now()
  }

  // putting new entry with objects in the journal array
  setJournal([newJournal, ...journal]);
  console.log('I just made a new journal entry')
 }

 // handles deleting a journal entry
 const deleteEntry = (idToDelete) =>{
setJournal(journal.filter((entry)=> entry.id !== idToDelete))

 }

 
  return (
    <div className="App">
     <Sidebar journal={journal} addNote={addNote} deleteEntry={deleteEntry}/>
     <Main/>
    </div>
  );
}

export default App;
