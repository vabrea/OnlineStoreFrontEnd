import "./todo.css";
import {useState} from "react";
import TodoItem from "./todoItem";


const Todo = () => {

    const [text, setText] = useState("");
    const [shoppingList, setShoppingList] = useState([]);

    const handleTextChange = (e) =>{

        setText(e.target.value)
    };



    const submit = () => {
        console.log (text);
        let copy = [...shoppingList];
        copy.push(text);
        setShoppingList(copy);
    };

    return (
        <div className="todo">
            <h1>Shopping List</h1>
            <div className ="input-todo">
                <input onChange={handleTextChange} type ="text" placeholder="Add to the list"></input>
                <button onClick ={submit} className = "btn btn-sm btn-warning">Submit</button>
            </div>
            
            <div className ="shopping-list">
                <p> You have {shoppingList.length} items on your list</p>
                
                   
                    {shoppingList.map((t, index) =>(
                        <TodoItem key ={index} content={t}></TodoItem>
                    ))}
                    
                
            </div>
        </div>
    )
}

export default Todo