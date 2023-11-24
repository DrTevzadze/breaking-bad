function Input({ label, onChange }) {
  return (
    <div>
      <label>
        {label}
        <br />
        <input type="text" onChange={onChange} />
      </label>
    </div>
  );
}

export default Input;
