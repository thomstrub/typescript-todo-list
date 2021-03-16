import React, {useState} from 'react'
import { render } from 'react-dom'
//import components
import ToDoForm from './components/TodoForm'
import ToDoList from './components/TodoList'
//import interfaces
import { TodoInterface } from './interface'
import './style.css'

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([])
  // Creating a new todo item
  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.push(todo)
    setTodos(newTodosState)
  }
  // Update existing todo item
  function handleTodoUpdate(event:
    React.ChangeEvent<HTMLInputElement>, id: string) {
      const newTodosState: TodoInterface[] = [...todos]
      newTodosState.find((todo: TodoInterface) => todo.id === id)!.name = event.target.value

      setTodos(newTodosState)
    }

    // Remove existing todo item
    function handleTodoRemove(id:string) {
      const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
      setTodos(newTodosState)
    }
    // Check existing todo item as completed
    function handleTodoComplete(id: string) {
      const newTodosState: TodoInterface[] = [...todos]
      // Find the correct todo item and update its 'isCompleted' key
      newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => 
      todo.id === id)!.isCompleted
      setTodos(newTodosState)
    }

    return(
      <div className="App">
        <React.Fragment>
          <h2>My ToDo App</h2>
          <ToDoForm
          todos={todos}
          handleTodoCreate={handleTodoCreate}
          />
          <ToDoList
            todos={todos}
            handleTodoUpdate = {handleTodoUpdate}
            handleTodoRemove = {handleTodoRemove}
            handleTodoComplete = {handleTodoComplete}
          />
        </React.Fragment>
      </div>
    );
}
export default App;