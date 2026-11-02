import { useState, useEffect } from "react";
import IconUnsorted from "./IconUnsorted";
import IconSortAsc from "./IconSortAsc";
import IconSortDesc from "./IconSortDesc";
import ElementButton from "./ElementButton";

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
      <div className="flex-container sort-buttons">
        <ElementButton
          action={setNewSortOrder}
          icon={<IconUnsorted />}
          value="unsorted"
          disabled={order == "unsorted"}
        />
        <ElementButton
          action={setNewSortOrder}
          icon={<IconSortAsc />}
          value="ascending"
          disabled={order == "ascending"}
        />
        <ElementButton
          action={setNewSortOrder}
          icon={<IconSortDesc />}
          value="descending"
          disabled={order == "descending"}
        />
      </div>
    </div>
  );
}

export default ElementSortBar;
