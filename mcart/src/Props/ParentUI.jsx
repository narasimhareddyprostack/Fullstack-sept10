import React from "react";
import ChildUI from "./ChildUI";
function ParentUI() {
  let empNo = 101;
  let empName = "Narasimha Reddy";

  let Sal = { baseSalary: 500, hike: "100%" };

  function hire() {
    return "wow hire us";
  }
  return (
    <div>
      <ChildUI
        hello={"hello"}
        empNo={empNo}
        empName={empName}
        Sal={Sal}
        hire={hire}
      />
    </div>
  );
}

export default ParentUI;
