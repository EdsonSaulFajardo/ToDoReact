import{useState} from "react";


function App() {
  const[todos, setTodos]=useState([]);
  const[todo, setTodo]=useState("");
  
  function handleSubmit(event){
    event.preventDefault();
    setTodos(todos.concat(todo));
    setTodo("");
    //console.log(todos);

  }
  
  function handleChange(event){
    setTodo(event.target.value);
   // console.log(todo)
  }

  function deleteAll(){
    console.log("funcion de borrado pendiente");
    console.log();
  }

  return (
    <>
    <div className="container m-auto">
      <h1 style={{textAlign:"center"}}  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">React ToDo</h1>
      <form onSubmit={handleSubmit} className="my-5">
        <input 
          name="todo" 
          value={todo}
          style={{width:"100%"}} 
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Ingresa los valores"
      />
      </form>
      <ul className="my-5">

        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" onClick={deleteAll}>Borrar todo</button>
    </div>
    
    </>
  )
}

export default App
