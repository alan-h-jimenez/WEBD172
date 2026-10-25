function ElementRecordCard({ id, number, title, department, units }) {
  return (
    <li>
      <div className="record-header">
      <span>{number}</span>
      <span>{units} units</span>
      </div>
      <br />
      <strong>{title}</strong>
      <br />
      {department}
    </li>
  );
}

export default ElementRecordCard;
