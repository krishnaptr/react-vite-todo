import { Button, Form } from "react-bootstrap";

const InputTodo = ({ handleChange, handleSubmit, todo, edit, handleReset }) => {
  return (
    <Form onSubmit={handleSubmit} className="w-50 mx-auto">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
        value={todo.title ?? ""}
          name="title"
          type="text"
          placeholder="Enter title"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control
        value={todo.desc ?? ""}
          as="textarea"
          rows={3}
          onChange={handleChange}
          name="desc"
          placeholder="Enter description"
        />
      </Form.Group>
      <Button className={edit ? "btn btn-warning":"btn btn-primary"} type="submit">
        {edit ? "Edit Todo" : "Create Todo"}
      </Button>
      <Button className={edit ? "d-inline ms-2":"d-none"} onClick={handleReset}>
       Cancel Edit
      </Button>
    </Form>
  );
};

export default InputTodo;
