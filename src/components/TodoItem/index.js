// Write your code here
import './index.css'

const Todoperform = props => {
  const {todoitem, deleteToDo} = props
  const {title, id} = todoitem

  const onToDoDelete = () => {
    deleteToDo(id)
  }
  return (
    <li className="listContainer">
      <p>{title}</p>
      <div>
        <button type="button" className="buttonstyle" onClick={onToDoDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default Todoperform
