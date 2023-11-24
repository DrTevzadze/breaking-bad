function Input({ label, onChange }) {
  return (
    <div>
      <label>
        {label}
        <br />
        <input type="text" onChange={onChange} spellCheck={false} />
      </label>
    </div>
  );
}

export default Input;
