import { useState, useEffect } from "react";
import IconUnsorted from "./IconUnsorted";
import IconSortAsc from "./IconSortAsc";
import IconSortDesc from "./IconSortDesc";
import ElementSortButton from "./ElementSortButton";

function ElementSortBar({ courseList, filter, setSort, order }) {
  const applyFilterAndSort = (sortOrder) => {
    let result = [...courseList];

    if (sortOrder === "ascending") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "descending") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    filter(result);
  };

  const setNewSortOrder = (value) => {
    setSort(value);
    applyFilterAndSort(value);
  };

  useEffect(() => {
    if (courseList && courseList.length > 0) {
      applyFilterAndSort(order || "unsorted");
    }
  }, [courseList]);

  return (
    <div>
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

export default ElementSortBar;
