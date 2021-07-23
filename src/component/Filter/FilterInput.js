const FilterInput = ({ label, value, Event, max }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input type="range" min="0" max={max} value={value} onChange={Event} className="form-range my-3" />
    </>
  );
};

export default FilterInput;
