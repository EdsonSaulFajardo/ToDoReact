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

  return (
    <div      
        style={{
          maxWidth: "600px",
          marginLeft:"auto",
          marginRight:"auto",
          
      }}
      >
      <h1 style={{textAlign:"center"}}>Rect ToDo</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name="todo" 
          value={todo}
          style={{width:"100%"}} 
          onChange={handleChange}
      />
      </form>
      <ul>

        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

// import { useState } from 'react'
// function App() {
//   const [todos, setTodos] = useState([]);
//   const [todo, setTodo] = useState("");
// function handleSubmit(event)
// {
//   event.preventDefault();
//   setTodos(todos.concat(todo));
//   setTodo("");

//   function handleChange(event){
//     setTodo(event.target.value);
//   }
// }

//   return (
//     <div
//       style= {{
//         maxWidth: "600px",
//         marginLeft: "auto",
//         marginRight: "auto",

//       }}>
//       <h1 style={{ textAlign: "center" }}> React ToDo </h1>
//       <form onSubmit={handleSubmit}>
        
//       <input name="todo" 
//         value= {todo}
//         style={{width: 100%}}
//         onChange= {handleChange}

//      />
//      </form>
//      <ul>
//       {todos.map((todo, ndex)==> (<li key={index}>{todo}</li>))}
//       </ul>
//     </div>
//   );
// }
// export default App;