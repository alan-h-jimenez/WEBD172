const elementDisplayAllRecords = document.getElementById("displayAllRecords");
const elementDisplayOneRecord = document.getElementById("displayOneRecord");
const elementSingleRecord = document.getElementById("toolRecord");
const elementInput = document.getElementById("recordID");

const clearDisplay = () => {
    const displays = document.getElementsByClassName("display");

    for (let i = 0; i < displays.length; i++) {
        displays[i].classList.add('hidden');
    }
}

document.getElementById("allRecords").addEventListener("click", async () => {
    const response = await fetch("/api/tools");
    const tools = await response.json();

    const toolList = tools
        .map(tool => `<div class="tool-card">
                <p>Model: ${tool.model}</p>
                <p>Brand: ${tool.brand}</p>
                <img src="${tool.image}" class="image"></img>
                <p class="name">${tool.name}</p>
            </div>`)
        .join("");

    clearDisplay();
    elementDisplayAllRecords.classList.remove("hidden");
    elementDisplayAllRecords.innerHTML = toolList;
});

document.getElementById("oneRecord").addEventListener("click", () => {
    clearDisplay();

    elementDisplayOneRecord.classList.remove("hidden");
});

document.getElementById("searchRecord").addEventListener("click", async () => {
    const response = await fetch(`/api/tools/${elementInput.value}`);
    console.log(response);
    const tool = await response.json();
    let output = '';

    if (!response.ok) {
        output = '<p class="center">The tool ID was not found in the database.</p>';
    } else {
        output = `<p>Model: ${tool.model}</p>
                <p>Brand: ${tool.brand}</p>
                <img src="${tool.image}" class="image"></img>
                <p class="name">${tool.name}</p>`;
    }

    elementSingleRecord.classList.remove("hidden");
    elementSingleRecord.innerHTML = output;
});