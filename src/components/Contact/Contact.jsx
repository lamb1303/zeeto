import React, { useState } from "react";
import "./Contact.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleInput = (id, value) => {
    switch (id) {
      case "name":
        value === "" ? setNameError("Required field") : setNameError("");
        setName(value);
        break;
      case "email":
        if (value === "") {
          setEmailError("Required field");
        } else if (
          !/^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
            value
          )
        ) {
          setEmailError("Invalid Email Format");
        } else {
          setEmailError("");
        }
        setEmail(value);
        break;
      case "phone":
        if (value === "") {
          setPhoneError("Required field");
        } else if (value.length < 10) {
          setPhoneError("10 numbers are required");
        } else {
          setPhoneError("");
        }
        setPhone(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form className="contact__form">
        <TextField
          className="contact__field"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          helperText={nameError}
          error={nameError ? true : false}
          onChange={(e) => handleInput("name", e.target.value)}
        />
        <TextField
          id="outlined-basic"
          className="contact__field"
          label="Email"
          variant="outlined"
          name="email"
          value={email}
          onChange={(e) => handleInput("email", e.target.value)}
          helperText={emailError}
          error={emailError ? true : false}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          className="contact__field"
          type="number"
          error={phoneError !== "" ? true : false}
          helperText={phoneError}
          value={phone}
          onChange={(e) => handleInput("phone", e.target.value)}
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 10);
          }}
          variant="outlined"
        />
        <TextField
          style={{ margin: "2em" }}
          name="message"
          className="contact__field"
          id="outlined-multiline-static"
          label="Message:"
          multiline
          rows={4}
          defaultValue="Enter your message"
          variant="outlined"
        />
      </form>
      <Button variant="contained" color="primary">
        Send
      </Button>
    </div>
  );
};

export default Contact;
