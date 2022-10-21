import NoteBlock from "../NoteBlock";

interface NotesProps {
  notes: string[];
}
const NotesContainer: React.FC<NotesProps> = ({ notes }) => {
  return (
    <div>
      <ul>
        {notes.map((note,index) => (
          <li key={index}>
            <NoteBlock note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NotesContainer;
