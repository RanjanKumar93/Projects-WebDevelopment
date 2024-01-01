export default function Note({ content, label, handleToggleImportant, handleDelete }) {
  return <><li className="note" >{content} <button onClick={handleToggleImportant}>{label}</button> <button onClick={handleDelete}>delete</button></li></>;
}
