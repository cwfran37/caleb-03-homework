// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];
  while (true) {
    const firstName = prompt("Employee's first name");
    const lastName = prompt("Employee's last name");
    const salary = prompt("Employee's salary");

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employees.push(employee);

    const moreEmployee = prompt("Add more employees? (yes/no)")
    if (moreEmployee === 'no') {
      break;
    }
  }
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  if (employeesArray.length === 0) {
    console.log("no employees :(");
    return;
  }
  let allSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    allSalary += employeesArray[i].salary;
  }
  const averageSalary = allSalary / employeesArray.length;
  console.log("the average salary is: $" + averageSalary.toFixed(2));
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  if (employeesArray === 0) {
    console.log("no employees :(");
    return;
  }
  const randomIndex = Math.floor(Math.random() * employeesArray);
  const randomEmployee = employeesArray[randomIndex];
  console.log("the random employee is:", randomEmployee)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
