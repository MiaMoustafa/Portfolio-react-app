import React from "react";
import "../scss/contact.scss";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const Contact = (props) => {
  return (
    <div>
      <div className="container ContactBox">
        <div className="row flex-wrap justify-content-center align-items-center sm-column">
          <div class="col-sm-6 firstBox">
            <h2>I'd Love to hear from you!</h2>
          </div>
          <div className="col-sm-6 secondBox">
            <form></form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
