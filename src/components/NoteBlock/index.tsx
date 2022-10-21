interface NoteBlockProps{
    note:string
}
const NoteBlock : React.FC<NoteBlockProps> =({note})=>{
    return <> {note} </>
}
export default NoteBlock;