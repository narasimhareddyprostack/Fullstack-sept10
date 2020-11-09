import React from "react";

function ChildUI(props) {
  return (
    <div>
      <h1>
        {props.hello}... EmpNo:: {props.empNo}...Emp Name: {props.empName}
      </h1>
      <h4> Salary Info</h4>
      <h3>
        {props.Sal.baseSalary}.. Hike{props.Sal.hike}
      </h3>
      <h5> {props.hire()}</h5>
    </div>
  );
}

export default ChildUI;
