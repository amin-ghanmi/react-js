import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Form,Button} from 'react-bootstrap' ;


function App() {
  return (
    <div className="App">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label class="colo">Email address</Form.Label>
          <Form.Control type="email"  placeholder="Please enter your Email" />
          <Form.Text className="text-muted" className="size">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label class="colo">Password</Form.Label>
          <Form.Control type="password" placeholder="Please enter your Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <h2 className="size">Welcome To Our Forum </h2>
      
    </div>
  );
}

export default App;
