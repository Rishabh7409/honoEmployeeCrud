import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { deleteEmployee, getAllEmployee } from "../_helper/apiCall/noteService";
import { GrFormView } from "react-icons/gr";
import { toast } from 'react-toastify';

import { Tooltip } from "reactstrap";
function Home() {
  const [employees, setEmployee] = useState([]);
  const [tooltipOpenview, setTooltipOpenview] = useState(false);
  const toggleview = () => setTooltipOpenview(!tooltipOpenview);
  const [tooltipOpenedit, setTooltipOpenedit] = useState(false);
  const toggleedit = () => setTooltipOpenedit(!tooltipOpenedit);
  const [tooltipOpendelete, setTooltipOpendelete] = useState(false);
  const toggledelete = () => setTooltipOpendelete(!tooltipOpendelete);
  console.log("hello", employees);
  useEffect(() => {
    (async () => {
      let data = await getAllEmployee();
      if (data) {
        console.log(data?.data);
        setEmployee(data?.data);
      }
    })();
  }, []);
  const onDelete = async (id) => {
    await deleteEmployee(id);
    (async () => {
      let data = await getAllEmployee();
      if (data) {
        toast("Deleted Successfully")
        console.log(data?.data);
        setEmployee(data?.data);
      } else {
        setEmployee([]);
      }
    })();
  };

  return (
    <div className="container">
      <h1 className="text-center">All Employees</h1>
      <div className="d-flex justify-content-between">
        <Link to="/add">
          <Button color="primary">Register Employee</Button>
        </Link>
      </div>

      {employees && Object.values(employees).length > 0 ? (
        <>
          <Table hover className="table-design">
            <thead>
              <tr>
                {/* <th>Sr.No.</th> */}
                <th>Name</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>

            {Object.entries(employees).map(([key, value]) => (
              <tbody>
                <tr>
                  {/* <th scope="row">{index + 1}</th> */}
                  <td>{value.name}</td>
                  <td>{value.position}</td>
                  {/* <td>{i.department}</td> */}
                  <td>
                    <Link className="m-1" to={"/view/" + key}>
                      <Button size="sm" className="action-btn" color="success">
                        <GrFormView id="VeiwID" style={{ fontSize: "25px" }} />
                        <Tooltip
                          isOpen={tooltipOpenview}
                          target="VeiwID"
                          toggle={toggleview}
                        >
                          View More
                        </Tooltip>
                      </Button>
                    </Link>
                    <Link to={"/edit/" + key}>
                      <Button size="sm" className="action-btn" color="success">
                        <AiTwotoneEdit
                          id="EditId"
                          style={{ fontSize: "25px" }}
                        />
                        <Tooltip
                          isOpen={tooltipOpenedit}
                          target="EditId"
                          toggle={toggleedit}
                        >
                          Edit Employee
                        </Tooltip>
                      </Button>
                    </Link>
                    <Button size="sm"
                      className="action-btn m-1"
                      onClick={async (e) => {
                        e.preventDefault();
                        await onDelete(key);
                      }}
                      color="danger"
                    >
                      <AiFillDelete
                        id="deleteId"
                        style={{ fontSize: "25px" }}
                      />
                      <Tooltip
                        isOpen={tooltipOpendelete}
                        target="deleteId"
                        toggle={toggledelete}
                      >
                        Delete Employee
                      </Tooltip>
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </>
      ) : (
        <>No record found</>
      )}
    </div>
  );
}

export default Home;
