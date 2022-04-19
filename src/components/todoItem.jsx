import SizeSelect from "./sizeselect"
import "./todoItem.css"

const TodoItem = (props) => {
    return (
        <div className = "todo-item">
            <div className = "item-ent">
            {props.content}
            </div>

            <div className ="size-sel">
            <SizeSelect></SizeSelect>
            </div>


        </div>
    )
}

export default TodoItem