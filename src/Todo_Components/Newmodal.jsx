import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Newmodal = ({
  form,
  setForm,
  handleClose,
  show,
  changetodo,
  setChangetodo,
  setTodos,
  todos,
}) => {
  const handleClick = () => {
    if (changetodo !== null) {
      const newtodo = todos.map((todo, index) => {
        if (index === changetodo) {
          todo = { ...form };
        }
        return todo;
      });
      setTodos(newtodo);

      setChangetodo(null);
      handleClose();

      setForm({ title: "", description: "" });
    } else {
      setTodos([...todos, form]);
      handleClose();
      setForm({ title: "", description: "" });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={form.title}
                name="title"
                onChange={handleChange}
                placeholder="Enter Title"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={form.description}
                name="description"
                onChange={handleChange}
                placeholder="Enter Description"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Newmodal;
