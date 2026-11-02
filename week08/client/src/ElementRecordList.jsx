import ElementRecordCard from "./ElementRecordCard";

function ElementRecordList({ courseList, onEdit, onDelete }) {
  return (
    <ul>
      {courseList.map((course) => (
        <ElementRecordCard
          key={course.id}
          course={course}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ElementRecordList;
