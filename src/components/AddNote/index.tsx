import { useState } from "react";
import { NotesState as NotesProps } from "../../App";
import AddNoteView from "./addNote-view";

export interface AddNoteState {
  note: string;
  setNote:React.Dispatch<React.SetStateAction<string>>,
  noteHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  notesHandler: (note: string) => void;
}
const AddNote: React.FC<NotesProps> = ({ notesHandler }) => {
  const [note, setNote] = useState("");
  const noteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };
  return (
    <>
      <AddNoteView note={note} setNote={setNote} noteHandler={noteHandler} notesHandler={notesHandler} />
    </>
  );
};
export default AddNote;
