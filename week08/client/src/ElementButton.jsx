function ElementButton({ action, icon, value, disabled, size = "btn-40" }) {
  return (
    <button
      className={size}
      onClick={() => action(value)}
      disabled={disabled}
    >
      {icon}
    </button>
  );
}

export default ElementButton;
