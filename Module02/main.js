import { getUsers } from "./api.js";

const elementRecordsTotal = document.getElementById("records");
const elementRecordsDisplayed = document.getElementById("filtered");
const elementSearchBar = document.getElementById("searchString");
const userList = document.getElementById("userList");
let userRecords;
let filteredRecords;
let sortState = 0;

const displayUsers = () => {
  let sortedRecords = [...filteredRecords];
  elementRecordsDisplayed.innerHTML = filteredRecords.length;
  userList.innerHTML = "";

  if (sortState === 1) {
    sortedRecords.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortState === -1) {
    sortedRecords.sort((a, b) => b.name.localeCompare(a.name));
  }

  sortedRecords.forEach((user) => {
    const { name, email, company, address } = user;

    const listItem = document.createElement("li");

    listItem.innerHTML = `
            <strong>${name}</strong><br>
            ${email}<br>
            ${company.name}<br>
            ${address.city}
        `;

    userList.appendChild(listItem);
  });
};

const setupList = async () => {
  userRecords = await getUsers();
  filteredRecords = [...userRecords];
  elementRecordsTotal.innerHTML = userRecords.length;
  displayUsers();
};

elementSearchBar.addEventListener("input", (event) => {
  let searchString = event.target.value.toLowerCase();

  filteredRecords = userRecords.filter((user) => {
    return user.name.toLowerCase().includes(searchString);
  });

  displayUsers();
});

document.getElementById("clearFilter").addEventListener("click", () => {
  elementSearchBar.value = "";
  filteredRecords = [...userRecords];
  displayUsers();
});

function changeButton(event, status) {
  let buttons = document.querySelector(".active");
  buttons.classList.remove("active");
  event.currentTarget.classList.add("active");
  sortState = status;
  displayUsers();
}

document.getElementById("buttonUnsort").addEventListener("click", (event) => {
  if (sortState != 0) {
    changeButton(event, 0);
  }
});

document.getElementById("buttonSortAsc").addEventListener("click", (event) => {
  if (sortState != 1) {
    changeButton(event, 1);
  }
});

document.getElementById("buttonSortDesc").addEventListener("click", (event) => {
  if (sortState != -1) {
    changeButton(event, -1);
  }
});

setupList();
