function ElementSortButton({ setSort, icon, value, selected }) {
  return (
    <button onClick={() => setSort(value)} disabled={value == selected}>
      {icon}
    </button>
  );
}

export default ElementSortButton;
