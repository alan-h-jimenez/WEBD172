import { useState, useEffect } from "react";
import ElementRecordList from "./ElementRecordList";
import ElementSearchBar from "./ElementSearchBar";
import { getUsers } from "./utilities.js";

function App() {
  const [userList, setUserList] = useState([]);
  const [filteredUserList, setFilteredUserList] = useState([]);
  const [sortOrder, setSortOrder] = useState("unsorted");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUserList(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="container">
        <h1>User Directory</h1>
        <p>Number of records pulled: {userList.length}</p>
        <p>Number of records displayed: {filteredUserList.length}</p>
        <ElementSearchBar
          userList={userList}
          filter={setFilteredUserList}
          setSort={setSortOrder}
          order={sortOrder}
        />
      </div>
      <div className="container">
        <ElementRecordList userList={filteredUserList} />
      </div>
    </>
  );
}

export default App;
