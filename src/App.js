import React from 'react';
import './App.css';


const headers = ["Last Name", "First Name", "Position", "Department", "Manager"]
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones"];
const firstNames = ["James", "John", "Robert", "Michael", "William"];
const positions = ["Manager", "Manager", "Engineer", "Engineer", "Intern"];
const departments = ["Front-End", "Back-End", "Front-End", "Back-End", "Back-End"];
const managers = ["NULL", "NULL", "James Smith", "John Johnson", "John Johnson"];

function App() {
  var table = document.createElement("table");
  table.setAttribute("id", "master");
  var rowHead = document.createElement("tr");
  var lastNameHead = document.createElement("th");
  lastNameHead.innerText = headers[0];
  rowHead.appendChild(lastNameHead);
  var firstNameHead = document.createElement("th");
  firstNameHead.innerText = headers[1];
  rowHead.appendChild(firstNameHead);
  var positionHead = document.createElement("th");
  positionHead.innerText = headers[2];
  rowHead.appendChild(positionHead);
  var departmentHead = document.createElement("th");
  departmentHead.innerText = headers[3];
  rowHead.appendChild(departmentHead);
  var managerHead = document.createElement("th");
  managerHead.innerText = headers[4];
  rowHead.appendChild(managerHead);
  table.appendChild(rowHead);
  for(var i = 0; i < lastNames.length; i++) {
    var row = document.createElement("tr");
    var lastName = document.createElement('td');
    lastName.innerText = lastNames[i];
    row.appendChild(lastName);
    var firstName = document.createElement('td');
    firstName.innerText = firstNames[i];
    row.appendChild(firstName);
    var position = document.createElement('td');
    position.innerText = positions[i];
    row.appendChild(position);
    var department = document.createElement('td');
    department.innerText = departments[i];
    row.appendChild(department);
    var manager = document.createElement('td');
    manager.innerText = managers[i];
    row.appendChild(manager);
    table.appendChild(row);
  }
  return (
    <div className="App" ref={node => node.appendChild(table)}>
      <input type="text" id="search" onKeyUp={function filterTable() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("search");
        filter = input.value.toLowerCase();
        table = document.getElementById("master");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }} placeholder="Search for names.." title="Type in a name"/>
      <p><button onClick={function sortTable() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("master");
        switching = true;
        while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
      }}>Sort</button></p>
    </div>
  );
}

export default App;
