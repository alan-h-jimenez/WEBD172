import { useState, useEffect } from "react";
import IconUnsorted from "./IconUnsorted";
import IconSortAsc from "./IconSortAsc";
import IconSortDesc from "./IconSortDesc";
import ElementSortButton from "./ElementSortButton";

function ElementSearchBar({ userList, filter, setSort, order }) {
  const [searchString, setSearchString] = useState("");

  const applyFilterAndSort = (searchQuery, sortOrder) => {
    let result = [...userList];

    if (searchQuery) {
      result = result.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (sortOrder === "ascending") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "descending") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    filter(result);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchString(value);
    applyFilterAndSort(value, order);
  };

  const setNewSortOrder = (value) => {
    setSort(value);
    applyFilterAndSort(searchString, value);
  };

  useEffect(() => {
    if (userList && userList.length > 0) {
      applyFilterAndSort(searchString, order || "unsorted");
    }
  }, [userList]);

  return (
    <div>
      <div className="search-bar">
        <label htmlFor="searchString">Search User Name:</label>
        <input
          type="text"
          id="searchString"
          name="searchString"
          value={searchString}
          onChange={handleSearchChange}
        />
        <button
          onClick={() => {
            setSearchString("");
            applyFilterAndSort("", order);
          }}
        >
          Clear
        </button>
      </div>
      <div className="sort-buttons">
        <ElementSortButton
          setSort={setNewSortOrder}
          icon={<IconUnsorted />}
          value="unsorted"
          selected={order}
        />
        <ElementSortButton
          setSort={setNewSortOrder}
          icon={<IconSortAsc />}
          value="ascending"
          selected={order}
        />
        <ElementSortButton
          setSort={setNewSortOrder}
          icon={<IconSortDesc />}
          value="descending"
          selected={order}
        />
      </div>
    </div>
  );
}

export default ElementSearchBar;
