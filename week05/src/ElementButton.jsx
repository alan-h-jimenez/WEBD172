function ElementButton({buttonID, setFilter, icon, value, selected}) {
    console.log('Button Value' + value + ' Filter: ' + selected);
    return (
        <button id={buttonID} onClick={() => setFilter(value)} disabled={value == selected}>
            {icon}
        </button>
    );
}

export default ElementButton;