function Logo({ result }) {
  return (
    <div>
      <span>{result[0]}</span>
      {result[1] && <span className="result">{result[1]}</span>}
      <span>{result[2]}</span>
    </div>
  );
}

export default Logo;
