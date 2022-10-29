import { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container, Card } from "react-bootstrap";

import { useAuth } from "../../AuthContext";
import "./Login.css";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState(``);
  const [message, setMessage] = useState(``);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError(``);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      setError("Failed to Create an account");
    }
    setLoading(false);
  }

  return (
    <div className="signup">
      <Container className="d-flex align-items-center signUp justify-content-center mt-4">
        <div style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Button type="submit" disabled={loading} className="w-100 mt-4">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 mt-2">
            Did not have an account ?
            <Link className="anchor" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
