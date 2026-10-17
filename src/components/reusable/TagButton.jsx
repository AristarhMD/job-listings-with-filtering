export default function TagButton({
  children,
  style,
  filteredTags,
  setFilteredJob,
}) {
  const handleAddFilter = (tag) => {
    if (filteredTags.includes(tag)) return;
    setFilteredJob((prev) => [...prev, tag]);
  };

  return (
    <button
      className={style}
      onClick={() => handleAddFilter(children)}
      data-value={children}
    >
      {children}
    </button>
  );
}
