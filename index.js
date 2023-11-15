function createTask() {
  var name = document.getElementById("name").value;
  var assignment = document.getElementById("assignment").value;
  var date = document.getElementById("date").value;
  var description = document.getElementById("description").value;

  if (name === "" || assignment === "" || date === "" || description === "") {
    alert("Porfavor Ingrese todos los campos");
    return;
  }
  var table = document.getElementById("tableTasks");
  var row = table.insertRow(-1);

  var cellName = row.insertCell(0);
  cellName.innerHTML = name;
  var cellAssignment = row.insertCell(1);
  cellAssignment.innerHTML = assignment;
  var cellDate = row.insertCell(2);
  cellDate.innerHTML = date;
  var cellDescription = row.insertCell(3);
  cellDescription.innerHTML = description;

  document.getElementById("taskForm").reset();
}

function readTask() {
  var row = document.getElementById("row").value;
  var table = document.getElementById("tableTasks");

  if (row >= 0 && row < table.rows.length) {
    var rowTable = table.rows[row];

    var nameTask = rowTable.cells[0].innerHTML;
    var assignedTask = rowTable.cells[1].innerHTML;
    var dateTask = rowTable.cells[2].innerHTML;
    var descriptionTask = rowTable.cells[3].innerHTML;

    var displayName = document.getElementById("displayName");
    displayName.innerHTML = nameTask;
    var displayAssignments = document.getElementById("displayAssignment");
    displayAssignments.innerHTML = assignedTask;
    var displayDate = document.getElementById("displayDate");
    displayDate.innerHTML = dateTask;
    var displayDescription = document.getElementById("displayDescription");
    displayDescription.innerHTML = descriptionTask;
  } else {
    alert("Fila fuera de Rango");
    return;
  }
}
function updateTask() {
  var row = document.getElementById("row").value;
  var table = document.getElementById("tableTasks");

}
