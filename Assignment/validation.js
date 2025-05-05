function validation(){
    event.preventDefault();
    let id=document.getElementById("id").value.trim();
    let name =document.getElementById("name").value.trim();
    let email =document.getElementById("email").value.trim();
    let dept =document.getElementById("department").value.trim();
    let date=document.getElementById("joinDate").value.trim();

    let errorId =document.getElementById("empId");
    let errorName =document.getElementById("empName");
    let errorEmail =document.getElementById("empEmail");
    let errorDept =document.getElementById("empDept");
    let errorDate =document.getElementById("join");
    let errorGender=document.getElementById("empGender");
    let errorType=document.getElementById("empType");

    errorId.innerText="";
    errorName.innerText="";
    errorEmail.innerText="";
    errorDept.innerText="";
    errorDate.innerText="";
    errorGender.innerText="";
    errorType.innerText="";

    let isValid=true;

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let namePattern= /^[a-zA-Z\s]+$/;

    let idPattern= /^EMP\d{3}$/;

    if (id==="" || !idPattern.test(id)){
        errorId.innerText="Employee Id is Required";
        isValid=false;
    }

    if (name==="" || !namePattern.test(name)){
        errorName.innerText="Employee Name is Required";
        isValid=false;
    }

    if (email==="" || !emailPattern.test(email)){
        errorEmail.innerText="Employee Email is Required";
        isValid=false;
    }

    if (dept === "Select a Department") {
        errorDept.innerText = "Employee Department is Required";
        isValid = false;
    }
    
    if (date === "") {
        errorDate.innerText = "Employee Joining Date is Required";
        isValid = false;
    }
    

    let gender=  document.querySelector('input[name="Gender"]:checked');

    if (!gender) {
        document.getElementById("empGender").innerText = "Employee Gender is Required";
        isValid = false;
      }

      let isFullTime = document.getElementById("fullTime").checked;
      if (!isFullTime) {
        document.getElementById("empType").innerText = "Employee Type is Required";
        isValid = false;
      }

      if (isValid) {
        const gender = document.querySelector('input[name="Gender"]:checked').value;
        const isFullTime = document.getElementById("fullTime").checked ? " Full-Time" : "Not Specified";
    

        const output = document.getElementById("output");
        output.innerHTML = `
            <h3>Submitted Employee Details</h3>
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Department:</strong> ${dept}</p>
            <p><strong>Joining Date:</strong> ${date}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Employee Type:</strong> ${isFullTime}</p>
        `;
    }

    return isValid;
    

}


function clearErrors() {
    document.getElementById("empId").innerText = "";
    document.getElementById("empName").innerText = "";
    document.getElementById("empEmail").innerText = "";
    document.getElementById("empDept").innerText = "";
    document.getElementById("join").innerText = "";
    document.getElementById("empGender").innerText = "";
    document.getElementById("empType").innerText = "";
}



///employeeee

function deleteRow(btn) {
    btn.parentElement.parentElement.remove();
  }
  

  function editRow(btn) {
    const row = btn.parentElement.parentElement;
    const rowIndex = row.rowIndex;
    const cells = row.children;
    const values = [];
  
    for (let i = 0; i < 7; i++) {
      values.push(cells[i].textContent.trim());
    }

  
    document.getElementById("editSection").innerHTML = `
      <h3>Edit Employee</h3>
      <div>ID: <input type="text" id="eID" value="${values[0]}"></div>
      <div>Name: <input type="text" id="eName" value="${values[1]}"></div>
      <div>Email: <input type="email" id="eEmail" value="${values[2]}"></div>
      <div>Department: <input type="text" id="eDept" value="${values[3]}"></div>
      <div>Joining Date: <input type="date" id="eDate" value="${values[4]}"></div>
      <div>Gender: <input type="text" id="eGender" value="${values[5]}"></div>
      <div>Type: <input type="text" id="eType" value="${values[6]}"></div>
      <div><button onclick="saveEdit(${rowIndex})" id="save12">Save</button></div>
    `;
  }
  

  function saveEdit(rowIndex) {
    const table = document.querySelector("table");
    const row = table.rows[rowIndex];
  
    row.children[0].textContent = document.getElementById("eID").value;
    row.children[1].textContent = document.getElementById("eName").value;
    row.children[2].textContent = document.getElementById("eEmail").value;
    row.children[3].textContent = document.getElementById("eDept").value;
    row.children[4].textContent = document.getElementById("eDate").value;
    row.children[5].textContent = document.getElementById("eGender").value;
    row.children[6].textContent = document.getElementById("eType").value;
  

    document.getElementById("editSection").innerHTML = "";
  }
  
  