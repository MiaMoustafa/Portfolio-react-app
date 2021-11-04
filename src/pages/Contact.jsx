import React from "react";
import "../scss/contact.scss";
import { Row, Col, FormGroup, Input, Button } from "reactstrap";

const Contact = (props) => {
  return (
    <div className="container ContactBox">
      <div className="row First flex-wrap justify-content-center align-items-center sm-column">
        <div className="col firstBox">
          <h2>I'd Love to hear from you!</h2>
        </div>
        <div className="col secondBox">
          <form>
            <Row className="justify-content-center">
              <Col md={10} sm={6}>
                <FormGroup className="formgroup">
                  <Input
                    id="firstName"
                    placeholder="First Name"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>

              <Col md={10} sm={6}>
                <FormGroup className="formgroup">
                  <Input
                    id="lastName"
                    placeholder="Last Name"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>

              <Col md={10}>
                <FormGroup className="formgroup">
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                  ></Input>
                </FormGroup>
              </Col>

              <Col md={10}>
                <FormGroup className="formgroup">
                  <Input
                    id="message"
                    rows="6"
                    type="textarea"
                    placeholder="Message"
                  ></Input>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup className="formgroup">
                  <Button type="submit">Submit</Button>
                </FormGroup>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
