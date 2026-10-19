function ElementRecordCard({ name, email, company }) {
  return (
    <li>
      <strong>{name}</strong>
      <br />
      {email}
      <br />
      {company}
    </li>
  );
}

export default ElementRecordCard;
