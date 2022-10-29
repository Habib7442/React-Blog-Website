import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Contact.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.value;
    value = event.target.value;

    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;
    if (firstName && lastName && phone && email && address && message) {
      const res = await fetch(
        "https://blog-a0356-default-rtdb.firebaseio.com/contactData.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored Successfully");
      } else {
        alert("Please fill all details");
      }
    } else {
      alert("Please fill all details");
    }
  };
  return (
    <>
      <div className="container-fluid contact">
        <Link to="/">
          <h1 className="contact_text">Contact Us</h1>
        </Link>
        <div className="right container">
          <form method="POST" className="right">
            <TextField
              className="text"
              id="standard-basic"
              label="First Name"
              variant="standard"
              name="firstName"
              value={userData.firstName}
              onChange={postUserData}
              required
              style={{ color: "white" }}
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              name="lastName"
              value={userData.lastName}
              onChange={postUserData}
              required
            />
            <TextField
              id="standard-basic"
              label="Phone"
              variant="standard"
              name="phone"
              value={userData.phone}
              onChange={postUserData}
              type="number"
              required
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              name="email"
              value={userData.email}
              onChange={postUserData}
              type="email"
              required
            />
            <TextField
              id="standard-basic"
              label="Address"
              variant="standard"
              name="address"
              value={userData.address}
              onChange={postUserData}
              required
            />
            <TextField
              id="standard-basic"
              label="Message"
              variant="standard"
              name="message"
              value={userData.message}
              onChange={postUserData}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              href="#text-buttons"
              onClick={submitData}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
