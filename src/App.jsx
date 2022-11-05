import { useState } from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
    id: 0,
  });
  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReset()
    if(edit){
      const map = todos.map(item => item.id === todo.id ? todo : item)
      setTodos(map)
      setEdit(false)
    }else{
      setTodos([...todos, { ...todo, id: Date.now() }]);
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    const filter = todos.filter((item) => item.id != id);
    setTodos(filter);
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    handleReset()
    setEdit(true);
    const find = todos.find((item) => item.id == id);
    setTodo(find);
  };

  const handleReset = () => {
    setEdit(false)
    setTodo({
      id: '',
      title: '',
      desc: ''
    })
  }

  return (
    <div>
      <h1 align="center">Simple TODO's</h1>
      <InputTodo
        edit={edit}
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      ></InputTodo>
      <ListTodo
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      ></ListTodo>
    </div>
  );
};

export default App;
