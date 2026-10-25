const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

const courses = [
  { id: 1, number: "ACCT135", title: "Principles of Auditing", department: "Accounting", units: 3 },
  { id: 2, number: "ARCH100", title: "Graphic Design Communication I", department: "Architecture", units: 2 },
  { id: 3, number: "ARCH126", title: "History of Ancient World Architecture", department: "Architecture", units: 3 },
  { id: 4, number: "ARCH226", title: "Architectural Theory", department: "Architecture", units: 3 },
  { id: 5, number: "BUSE101", title: "Business Mathematics", department: "Business", units: 3 },
  { id: 6, number: "BUSE201", title: "Business Organization and Management", department: "Business", units: 3 },
  { id: 7, number: "ECON120", title: "Principles of Macroeconomics", department: "Economics", units: 3 },
  { id: 8, number: "PHYS195", title: "Mechanics", department: "Physics", units: 5 },
  { id: 9, number: "REAL105", title: "Legal Aspects of Real Estate I", department: "Real Estate", units: 3 },
  { id: 10, number: "REAL120", title: "Real Estate Practice", department: "Real Estate", units: 3 },
  { id: 11, number: "REAL130", title: "Real Property Management", department: "Real Estate", units: 3 },
  { id: 12, number: "SPAN101", title: "First Course in Spanish", department: "Spanish", units: 5 }
];

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
