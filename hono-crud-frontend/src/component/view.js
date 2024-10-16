import { React, useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getByid } from "../_helper/apiCall/employeeService";

function View() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      let res = await getByid(id);
      console.log(res);
      if (res.status == 1) {
        setData(res.data);
      }
    })();
  }, []);

  return (
    <div className="container">
      
      <Form className="login-form">
        <h1 className="heading">Employee Details</h1>
        <Row>
          <Col>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                value={data.name}
                name="name"
                disabled
                placeholder="Enter Your Name"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="position">Position:</Label>
              <Input
                type="text"
                value={data.position}
                disabled
                name="position"
                placeholder="Enter Your Position"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="department">Department:</Label>
              <Input
                type="text"
                value={data.department}
                disabled
                name="department"
                placeholder="Enter Your Department"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="email">Email:</Label>
              <Input
                type="email"
                value={data.email}
                disabled
                name="email"
                placeholder="Enter Your Email"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="number">Phone Number:</Label>
              <Input
                type="number"
                value={data.phone}
                disabled
                name="phone"
                placeholder="Enter Your Phone Number"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup className="buttondiv">
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            color="primary"
          >
            Back
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default View;
