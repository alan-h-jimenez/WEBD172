import { useState, useEffect } from "react";
import ElementRecordList from "./ElementRecordList";
import ElementSortBar from "./ElementSortBar.jsx";
import { getCourses } from "./utilities.js";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [filteredCourseList, setFilteredCourseList] = useState([]);
  const [sortOrder, setSortOrder] = useState("unsorted");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourseList(data);
      } catch (error) {
        console.error("Failed to fetch Courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Course Directory</h1>
        <p>Number of records pulled: {courseList.length}</p>
        <ElementSortBar
          courseList={courseList}
          filter={setFilteredCourseList}
          setSort={setSortOrder}
          order={sortOrder}
        />
      </div>
      <div className="container">
        <ElementRecordList courseList={filteredCourseList} />
      </div>
    </>
  );
}

export default App;
