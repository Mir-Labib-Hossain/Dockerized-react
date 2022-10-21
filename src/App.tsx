import React, { useState } from "react";
import AddNote from "./components/AddNote";
import NotesContainer from "./components/NotesContainer";

export interface NotesState {
  notesHandler: (note: string) => void;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const notesHandler = (note: string): void => {
    setNotes([...notes, note]);
  };

  return (
    <>
      <h1>Hello World - dev</h1>
      <AddNote notesHandler={notesHandler} />
      <NotesContainer notes={notes} />
    </>
  );
};

export default App;
