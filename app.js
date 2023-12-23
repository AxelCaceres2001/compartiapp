var formPerson = document.getElementById("form-person");
var formExpense = document.getElementById("form-expense");

formPerson.addEventListener("submit", function (e) {
    e.preventDefault();
});

formExpense.addEventListener("submit", function (e) {
    e.preventDefault();
});

function addPerson() {
    var namePerson = document.querySelector('input[name="name-person"]').value;

    if (isNaN(namePerson)) {

        var tableBodyPerson = document.getElementById("table-body-person");

        var newRow = tableBodyPerson.insertRow();
        var cellName = newRow.insertCell(0);
        var cellActions = newRow.insertCell(1);

        cellName.innerHTML = namePerson;

        var btnDelete = document.createElement("button");
        btnDelete.textContent = "X";
        btnDelete.classList.add("table__btn", "table__btn---delete");

        btnDelete.addEventListener("click", function () {
            deletePerson(newRow, tableBodyPerson, namePerson);
        });

        cellActions.appendChild(btnDelete);

        loadSelectPerson(namePerson);

    } else {
        console.log("Es un numero");
    }
}

function deletePerson(row, tableBodyPerson, namePerson) {
    tableBodyPerson.deleteRow(row.rowIndex - 1);

    var selectPerson = document.getElementById("select-person");
    for (var i = 0; i < selectPerson.options.length; i++) {
        if (selectPerson.options[i].value === namePerson) {
            selectPerson.remove(i);
            break;
        }
    }
}

function loadSelectPerson(namePerson) {
    var selectPerson = document.getElementById("select-person");

    var newOption = document.createElement("option");
    newOption.text = namePerson;
    newOption.value = namePerson;

    selectPerson.add(newOption);
}

function addExpense() {
    var nameExpense = document.querySelector('input[name="name-expense"]').value;
    var amount = document.querySelector('input[name="amount"]').value;
    var person = document.getElementById("select-person").value;
    var badge = document.getElementById("select-badge").value;

    if (!isNaN(amount)) {
        var tableBodyExpense = document.getElementById("table-body-expense");

        var newRow = tableBodyExpense.insertRow();
        var cellNameExpense = newRow.insertCell(0);
        var cellAmount = newRow.insertCell(1);
        var cellPerson = newRow.insertCell(2);
        var cellBadge = newRow.insertCell(3);
        var cellActions = newRow.insertCell(4);

        cellNameExpense.innerHTML = nameExpense;
        cellAmount.innerHTML = amount;
        cellPerson.innerHTML = person;
        cellBadge.innerHTML = badge;

        var btnDelete = document.createElement("button");
        btnDelete.textContent = "X";
        btnDelete.classList.add("table__btn", "table__btn---delete");

        btnDelete.addEventListener("click", function () {
            deleteExpense(newRow, tableBodyExpense);
        });

        cellActions.appendChild(btnDelete);

    } else {

    }
}

function deleteExpense(row, tableBodyExpense) {
    tableBodyExpense.deleteRow(row.rowIndex - 1);
}