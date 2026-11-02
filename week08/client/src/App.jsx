import { useState, useEffect } from "react";
import ElementRecordList from "./ElementRecordList.jsx";
import ElementSortBar from "./ElementSortBar.jsx";
import IconAdd from "./IconAdd";
import ElementButton from "./ElementButton";
import ElementCourseModal from "./ElementCourseModal";
import { getCourses, postCourse, updateCourse, deleteCourse } from "./utilities.js";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [filteredCourseList, setFilteredCourseList] = useState([]);
  const [sortOrder, setSortOrder] = useState("unsorted");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const fetchCourses = async () => {
    try {
      const data = await getCourses();
      setCourseList(data);
    } catch (error) {
      console.error("Failed to fetch Courses:", error);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  const openAddModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(true);
  };

  const openEditModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  }

  const handleSaveCourse = async (newCourseData) => {
    try {
      if (selectedCourse) {
        await updateCourse(newCourseData);
      } else {
        await postCourse(newCourseData);
      }
      await fetchCourses();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to save course:", error);
    }
  }

  const handleDeleteCourse = async (courseId) => {
    try {
      await deleteCourse(courseId);
      await fetchCourses();
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Course Directory</h1>
        <div className="flex-container v-pad-20 bottom-line">
          <div className="record-count">
            <p>Courses Retrieved</p><p><strong>{courseList.length}</strong></p>
          </div>
          <ElementButton
            action={openAddModal}
            icon={<IconAdd />}
            value="add"
            disabled={false}
          />
        </div>
        <ElementSortBar
          courseList={courseList}
          filter={setFilteredCourseList}
          setSort={setSortOrder}
          order={sortOrder}
        />
      </div>
      <div className="container">
        <ElementRecordList
          courseList={filteredCourseList}
          onEdit={openEditModal}
          onDelete={handleDeleteCourse}
        />
      </div>
      {isModalOpen && (
        <ElementCourseModal 
          onClose={() => setIsModalOpen(false)} 
          onSave={handleSaveCourse}
          courseToEdit={selectedCourse}
        />
      )}
    </>
  );
}

export default App;
