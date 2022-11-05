import { Button, ListGroup } from "react-bootstrap";

const ListTodo = ({ todos, handleEdit, handleDelete }) => {
  return (
   <div className="mt-5">
     <ListGroup className="w-50 mx-auto" style={{height: "15em", overflowY:"scroll", overflowX:"hidden"}}>
      {todos.map((todo, index) => {
        return (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center mb-3">
           <div className="d-flex flex-column">
            <p className="m-0" style={{fontWeight:"700"}}>{todo.title}</p>
            <p className="m-0">{todo.desc}</p>
           </div>
            <div>
              <Button className="me-3" onClick={(e) => handleEdit(e, todo.id)}>Edit</Button>
              <Button
                variant="danger"
                onClick={(e) => handleDelete(e, todo.id)}
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
   </div>
  );
};

export default ListTodo;
