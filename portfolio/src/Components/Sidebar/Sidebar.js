import React from "react";



function Sidebar({ journal, addNote, deleteEntry, activeNote, setActiveNote }) {
  return (
    <div>
      <div className="header">
        <h1> NOTES </h1>
        <button onClick={addNote}> Add</button>
      </div>
      <div className="notes">
        {/* maps through the array of journal to display information on each individual entry */}
        {journal.map((entry) => (
          <div className={`app-sidebar-note ${entry.id === activeNote && 'active'}`}onClick ={()=>setActiveNote(entry.id)}>
            
            <div className="title">
              <strong>{entry.title}</strong>
              <button onClick={() => deleteEntry(entry.id)}> Delete </button>
            </div>
            <p> {entry.body && entry.body.substr(0, 50) + "..."} </p>
            <small className="meta">
              {new Date(entry.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
