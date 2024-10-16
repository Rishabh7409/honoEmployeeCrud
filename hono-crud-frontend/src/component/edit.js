import { React, useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee,getByid } from "../_helper/apiCall/employeeService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Edit() {
  
  const { id } = useParams();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); 
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      let res = await getByid(id);
      console.log(res);
      if (res.status == 1) {
        setName(res.data.name)
        setPosition(res.data.position)
        setDepartment(res.data.department)
        setEmail(res.data.email)
        setPhone(res.data.phone)
      }
    })();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    let obj = { name: name, position: position,department:department,email:email,phone:phone };
    if (!name || !position  ||!department||!email||!phone) {
      toast.error("All fields are require")
      return;
    }
    let res = await updateEmployee(id,obj);
    if (res?.status == 1) {
      toast("Updated Successfully")
      navigate("/");
      return;
    }else if(res){
      toast.error(res.message)
    }
    return;
  };

  return (
    <div className="container">
      <Form className="login-form">
        <h1 className="heading">Edit Employee</h1>
        <Row>
          <Col>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                placeholder="Enter Your Name"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="position">Position:</Label>
              <Input
                type="text"
                value={position}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
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
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            name="phone"
            placeholder="Enter Your Phone Number"
          />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup className="buttondiv">
        <Button className="m-1"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            color="primary"
          >
            Back
          </Button><Button onClick={onSubmit} color="success">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Edit;
