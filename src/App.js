import React, { useState } from 'react';
import Axios from "axios";
import './App.css';
import image1 from './image1.png';
import gif from './employees-waves.gif';

function App() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Mob, setMob] = useState("");
  const [email, setemail] = useState("");
  const [DOB, setDOB] = useState("");
  const [address, setaddress] = useState("");
  const [accountNumber, setaccountNumber] = useState("");
  const [ifscCode, setifscCode] = useState("");
  const [bankName, setbankName] = useState("");
  const [branchName, setbranchName] = useState("");
  const [loading, setLoading] = useState(false)
  
  const [employeeList, setEmployeeList] = useState([]);
  const addEmployee = () => {
    Axios.post("http://localhost:8000/create", {
      firstName: firstName,
      lastName: lastName,
      Mob:Mob,
      email:email,
      DOB:DOB,
      address:address,
      accountNumber:accountNumber,
      ifscCode:ifscCode,
      bankName:bankName,
      branchName:branchName
    }).then((data) => {
      setLoading(true)
      setEmployeeList([
        ...employeeList,
        {
          firstName: firstName,
          lastName: lastName,
          Mob:Mob,
          email:email,
          DOB:DOB,
          address:address,
          accountNumber:accountNumber,
          ifscCode:ifscCode,
          bankName:bankName,
          branchName:branchName,
          
        },
        
      ]);
      setLoading(false)
    });
  };
  const getEmployees = () => {
    Axios.get("http://localhost:8000/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <div className="header">
            <h2>
              Add Employee
              <img src={image1} alt="image1" className="logo" />
            </h2>
          </div>
          <div className="personal-details">
            <h3>Personal Details</h3>
            <div className="input-fields">
              <div className="row">
                <input type="text" placeholder="First Name"
                 onChange={(event) => {
                  setfirstName(event.target.value);
                }} />
                <input type="text" placeholder="Last Name" 
                 onChange={(event) => {
                  setlastName(event.target.value);
                }}/>
              </div>
              <div className="row">
                <input type="text" placeholder="Mobile Number"
                 onChange={(event) => {
                  setMob(event.target.value);
                }} />
                <input type="text" placeholder="Email" 
                 onChange={(event) => {
                  setemail(event.target.value);
                }}/>
              </div>
              <div className="row">
             <input type="date" placeholder="DOB" 
             onChange={(event) => {
              setDOB(event.target.value);
            }}/>
              </div>
              <div className="row">
              <input type="text" placeholder="Address" 
             onChange={(event) => {
              setaddress(event.target.value);
             }}
              />
              </div>
            </div>
          </div>
          <div className="bank-details">
            <h3>Bank Details</h3>
            <div className="input-fields">
              <div className="row">
                <input type="text" placeholder="Account Number" 
                  onChange={(event) => {
                    setaccountNumber(event.target.value);
                  }}/>
                <input type="text" placeholder="IFSC Code"
                  onChange={(event) => {
                    setifscCode(event.target.value);
                  }} />
              </div>
              <input type="text" placeholder="Bank Name"
                  onChange={(event) => {
                    setbankName(event.target.value);
                  }} />
              <input type="text" placeholder="Branch Name" 
                onChange={(event) => {
                  setbranchName(event.target.value);
                }}/>
              <br></br>
              <div className="row">
              <button onClick={() => {
              addEmployee();
              alert("Employee saved successfully!");
              }}>Save</button>
              {loading ? <img src={getEmployees} alt="Loading..." /> : null}
              </div>
            </div>
          </div>
        </div>
        <div className="employees">
       
        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>firstName: {val.firstName}</h3>
                <h3>lastName: {val.lastName}</h3>
                <h3>Mob: {val.Mob}</h3>
                <h3>email: {val.email}</h3>
                <h3>DOB: {val.DOB}</h3>
                <h3>address: {val.address}</h3>
                <h3>accountNumber: {val.accountNumber}</h3>
                <h3>ifscCode: {val.ifscCode}</h3>
                <h3>bankName: {val.bankName}</h3>
                <h3>branchName: {val.branchName}</h3>
              </div>
            </div>
          );
        })}
      </div>
       
      </div>
      <div className="gif-box">
          <img src={gif} alt="gif" className="gif" />
          <div className="no-employees">No Employees found!</div>
        </div>
    </div>
  );
}

export default App;
