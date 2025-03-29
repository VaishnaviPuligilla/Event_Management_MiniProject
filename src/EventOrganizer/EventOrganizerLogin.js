import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import EventSignUp from "./EventSignUp"; // Importing the Sign Up modal

const EventOrganizerLogin = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showSignUp, setShowSignUp] = useState(false); // State for Sign Up modal

  // Email Validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(email) ? "Enter a valid email address." : "";
  };

  // Password Validation
  const validatePassword = (password) => {
    const minLength = 8;
    return password.length < minLength ? "Password must be at least 8 characters long." : "";
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };

  const handleSignUpClick = () => {
    handleClose(); // Close Sign In modal
    setShowSignUp(true); // Open Sign Up modal
  };

  return (
    <>
      {/* Sign In Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Times New Roman",
              fontSize: "1.5rem",
              marginBottom: "20px",
            }}
          >
            Sign In
          </h2>

          <Modal.Body>
            <Form>
              {/* Email Input */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <small style={{ color: "red", marginTop: "5px", display: "block" }}>
                    {emailError}
                  </small>
                )}
              </Form.Group>

              {/* Password Input */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <small style={{ color: "red", marginTop: "5px", display: "block" }}>
                    {passwordError}
                  </small>
                )}
              </Form.Group>

              {/* Login Button */}
              <Button
                variant="success"
                className="w-100 mb-2"
                disabled={emailError || passwordError}
              >
                Login
              </Button>

              {/* New User Sign-up */}
              <p className="text-center mt-2">
                New User?{" "}
                <span
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </span>
              </p>
            </Form>
          </Modal.Body>
        </motion.div>
      </Modal>

      {/* EventSignUp Modal */}
      <EventSignUp show={showSignUp} handleClose={() => setShowSignUp(false)} />
    </>
  );
};

export default EventOrganizerLogin;
