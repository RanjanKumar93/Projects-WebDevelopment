import { useState, useEffect } from "react";
import noteService from "./services/notes";
import Note from "./components/Note";

alert("Run dbou.json on port 3001");

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const handleSubmitNote = (event) => {
    event.preventDefault();
    const newNoteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

    noteService.create(newNoteObject).then((x) => {
      setNotes(notes.concat(x));
      setNewNote("");
    });
  };

  const handleAddChange = (event) => {
    setNewNote(event.target.value);
  };

  const importantNote = showAll
    ? notes
    : notes.filter((x) => x.important === true);

  const handleShowAll = () => {
    setShowAll((x) => !x);
  };

  const handleToggleImportant = (idValue) => {
    const note = notes.find((x) => x.id === idValue);
    const newObj = { ...note, important: note.important ? false : true };
    noteService.update(idValue, newObj).then((y) => {
      setNotes(notes.map((x) => (x.id === idValue ? y : x)));
    });
  };

  const handleDelete = (id) => {
    noteService.deleteIt(id).then((x) => {
      setNotes(notes.filter((x) => x.id !== id));
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={handleShowAll}>
          show {showAll ? "important only" : "all"}
        </button>
      </div>
      <ul>
        {importantNote.map((x) => (
          <Note
            key={x.id}
            content={x.content}
            label={x.important ? "make not important" : "make important"}
            handleToggleImportant={() => handleToggleImportant(x.id)}
            handleDelete={() => handleDelete(x.id)}
          />
        ))}
      </ul>
      <form onSubmit={handleSubmitNote}>
        <input
          value={newNote}
          placeholder="add new note..."
          onChange={handleAddChange}
        />
        <button>save</button>
      </form>
    </div>
  );
}

export default App;
