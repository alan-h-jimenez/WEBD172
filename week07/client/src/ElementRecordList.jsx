import ElementRecordCard from "./ElementRecordCard";

function ElementRecordList({ courseList }) {
  return (
    <ul>
      {courseList.map((course) => (
        <ElementRecordCard
          key={course.id}
          id={course.id}
          number={course.number}
          title={course.title}
          department={course.department}
          units={course.units}
        />
      ))}
    </ul>
  );
}

export default ElementRecordList;
