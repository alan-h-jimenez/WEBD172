import IconEdit from "./IconEdit";
import IconDelete from "./IconDelete";
import ElementButton from "./ElementButton";

function ElementRecordCard({ course, onEdit, onDelete }) {
  return (
    <li>
      <div className="record-header">
      <span>{course.number}</span>
      <span>{course.units} units</span>
      </div>
      <br />
      <strong>{course.title}</strong>
      <br />
      {course.department}
      <div className="flex-end">
        <ElementButton
            action={onEdit}
            icon={<IconEdit />}
            value={course}
            disabled={false}
            size={"btn-20"}
        />
        <ElementButton
            action={onDelete}
            icon={<IconDelete />}
            value={course.id}
            disabled={false}
            size={"btn-20"}
        />
      </div>
    </li>
  );
}

export default ElementRecordCard;
