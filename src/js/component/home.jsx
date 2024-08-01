import React, { useEffect, useState } from "react";
import reactDom from "react"
import axios from "axios";


const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState({});

  useEffect(() => {
    fetch('https://playground.4geeks.com/todo/users/Leivi521')
      .then((response) => {
        console.log(response)

        return response.json();
      })
      .then((data) => {
        console.log(data)
        console.log(data.todos)

        setToDoList(data.todos);
      })
      .then((error) => {
        console.log(error)


      })
  }, []);



  const addTodolist = (e) => {


    const newTask = { label: inputValue, is_done: false };

    setTask(newTask);

    setToDoList([...toDoList, newTask]);

    setInputValue("");

    fetch('https://playground.4geeks.com/todo/todos/Leivi521', {
      method: "POST",
      body: JSON.stringify(newTask),

      headers: { "Content-Type": "application/json" }

    })

      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .then((error) => {
        console.log(error);
      })


  };

  const handelInputValue = (e) => {

    setInputValue(e.target.value);

  }
  const handleDelete = (i, id) => {
    const newArray = toDoList.filter((toDoList, index) => index !== i);
    setToDoList(newArray)

    fetch('https://playground.4geeks.com/todo/todos/' + id, {
      method: "DELETE",
      body: JSON.stringify(""),

      headers: { "Content-Type": "application/json" }

    })

      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .then((error) => {
        console.log(error);
      })

  };


  return (
    <div className="container">
      <div className="nav">
        <h2>To-DO-List</h2>
        <div className="user-input">
          <input
            id="input"
            value={inputValue}
            onChange={(e) => handelInputValue(e)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { addTodolist(e) }
            }}
            type="text"
            placeholder="Enter a task..."
          />
          <button onClick={(e) => addTodolist(e)}>Add Task</button>

          {/* <button onClick={removeTodoList}>Delete All</button> */}
        </div>
      </div>
      <div className="container">
        <div className="To-do items">
          <ul>
            {toDoList.map((task, index) =>

              <li key={index}>
                {index + 1}
                {".  "}
                {task.label} <button onClick={() => handleDelete(index, task.id)}>Delete</button>
              </li>
            )}

          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;








// const handleAddTask = () => {
//   // Check if input value is empty before adding to list
//   if (inputValue.trim()) {
//     setToDoList([...toDoList, inputValue]);
//     setInputValue("");
//   } else {
//     alert("Please enter a task!"); // Inform user about empty input
//   }
//   fetch('https://playground.4geeks.com/todo/users/leivi')


// }

//  const requestParameters = {

//   method: "POST",
//   body: JSON.stringify([]),
//   headers: {"Content-Type": "application/json"}


//  }


// const getUserInfo = () => {
//   fetch('https://playground.4geeks.com/todo/users/leivi')
//     .then(response => {
//       console.log(response.ok)
//       if (!response.ok){
//         fetch('https://playground.4geeks.com/todo/users/leivi', requestParameters )
//         .then(response => {
//           console.log(response)
//           return response.json()

//         }
//       )

//       }




//       return response.json()
//     })

//     .then(data => {console.log(data)
//        setToDoList(data.todos)

//     })

// }



// useEffect(()=> {
//   getUserInfo()
// }, [])
// function handleDelete(index) {
//   setToDoList(toDoList.filter((_, i) => i !== index));




// };

//   return (
//     <div className="container">
//       <div className="nav">
//         <h2>To-DO-List</h2>
//         <div className="user-input">
//           <input
//             id="input"
//             value={inputValue}
//             onChange={(event) => setInputValue(event.target.value)}
//             type="text"
//             placeholder="Enter a task..."
//           />
//           <button onClick={handleAddTask}>Add Task</button>

//           <button onClick={handleDelete}>Delete All</button>
//         </div>
//       </div>
//       <div className="container">
//         <div className="To-do items">
//           <ul>
//             {toDoList.map((task, index) => (
//               <li key={index}>
//                 {task} <button onClick={() => handleDelete(index)}>Delete</button>
//               </li>
//             ))}

//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Home;

