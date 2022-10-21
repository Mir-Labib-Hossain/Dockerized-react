import { AddNoteState as AddNoteProps } from ".";

const AddNoteView: React.FC<AddNoteProps> = ({ note, setNote, noteHandler, notesHandler }) => {
  return (
    <>
      <input type="text" value={note} onChange={noteHandler} />
      <button
        type="button"
        onClick={() => {
          notesHandler(note);
          setNote("");
        }}
      >
        Add
      </button>
    </>
  );
};
export default AddNoteView;
