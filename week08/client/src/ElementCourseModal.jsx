import { useState, useEffect } from "react";
import IconCancel from "./IconCancel";
import IconSave from "./IconSave";
import ElementButton from "./ElementButton";

function ElementCourseModal({ onClose, onSave, courseToEdit }) {
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [units, setUnits] = useState(0);

  useEffect(() => {
    if (courseToEdit) {
      setNumber(courseToEdit.number || "");
      setTitle(courseToEdit.title || "");
      setDepartment(courseToEdit.department || "");
      setUnits(courseToEdit.units || 0);
    }
  }, [courseToEdit]);

  const handleSubmit = (e) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }

    const newCourse = {
      ...(courseToEdit && { id: courseToEdit.id }),
      number: number,
      title: title,
      department: department,
      units: Number(units),
    };

    onSave(newCourse);
  };

  return (
    <div className="modal-backdrop">
      <div className="container modal-content">
        <h2>Add New Course</h2>
        <form>
           <div className="flex-column mb-20">
            <label>Course Number:</label>
            <input 
              type="text" 
              value={number} 
              onChange={(e) => setNumber(e.target.value)} 
              placeholder="e.g., WEBD173" 
              required
            />
          </div>
          <div className="flex-column mb-20">
            <label>Course Title:</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="e.g., Intro to React" 
              required 
            />
          </div>
          <div className="flex-column mb-20">
            <label>Department:</label>
            <input 
              type="text" 
              value={department} 
              onChange={(e) => setDepartment(e.target.value)} 
              placeholder="e.g., Real Estate"
              required
            />
          </div>
          <div className="flex-column mb-20">
            <label>Number of Units:</label>
            <input 
              type="number" 
              value={units} 
              onChange={(e) => setUnits(e.target.value)} 
              placeholder="e.g., 3"
              required
            />
          </div>
          <div className="flex-end">
            <ElementButton
               action={onClose}
               icon={<IconCancel />}
               value="cancel"
               disabled={false}
            />
            <ElementButton
               action={handleSubmit}
               icon={<IconSave />}
               value="save"
               disabled={false}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ElementCourseModal;