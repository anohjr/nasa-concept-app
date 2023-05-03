/* eslint-disable react/prop-types */

export default function FilterButton({
  filterText,
  setSearchQuery,
  setPageNum,
  setMyData,
}) {
  function handleClickFilter(e) {
    setSearchQuery(e);
    setPageNum(1);
    setMyData([]);
  }
  return (
    <button
      type="button"
      onClick={(e) => handleClickFilter(e.target.innerText)}
    >
      {filterText}
    </button>
  );
}
