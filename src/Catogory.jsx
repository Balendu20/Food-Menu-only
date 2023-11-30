const Catogory = ({ catogory, filterItem }) => {
  return (
    <div className="btn-container">
      {catogory.map((catogorys) => {
        return (
          <button
            className="btn"
            type="button"
            key={catogorys}
            onClick={() => filterItem(catogorys)}
          >
            {catogorys}
          </button>
        );
      })}
    </div>
  );
};

export default Catogory;
