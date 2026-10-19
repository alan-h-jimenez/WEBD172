import ElementRecordCard from "./ElementRecordCard";

function ElementRecordList({ userList }) {
  return (
    <ul>
      {userList.map((user) => (
        <ElementRecordCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          company={user.company.name}
        />
      ))}
    </ul>
  );
}

export default ElementRecordList;
