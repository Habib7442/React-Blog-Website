import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Alert, Container, Card } from "react-bootstrap";

import { useAuth } from "../../AuthContext";
import "./Signup.css";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState(``);
  const [message, setMessage] = useState(``);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError(``);
      await signup(emailRef.current.value, passwordRef.current.value);
      setMessage("Sign Up successful");
    } catch (error) {
      // setError("Failed to Create an account");
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div className="signup">
      <Container className="d-flex align-items-center signUp justify-content-center mt-4">
        <div style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password (must be 6 characters)</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button type="submit" disabled={loading} className="w-100 mt-4">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 mt-2">
            Already have an account ?
            <Link className="anchor" to="/login">
              Log In
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
