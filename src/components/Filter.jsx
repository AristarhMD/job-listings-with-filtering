export default function Filter({ filteredTags, setFilteredJob }) {
  const handleRemovingTag = (tag) =>
    setFilteredJob((prev) => prev.filter((oldTag) => oldTag !== tag));

  const handleRemoveAllTags = () => setFilteredJob([]);

  return (
    <section className="w-[87.2%] md:max-w-2xl xl:max-w-278 mx-auto py-4 px-6 xl:px-10 rounded-[5px] bg-white shadow-card mb-16 -mt-23 grid grid-cols-[1fr_min-content] grid-rows-1 ">
      <div className="flex items-center flex-wrap gap-4">
        {filteredTags.map((tag, idx) => (
          <p key={idx} className="filter-tag-btn">
            {tag}
            <button onClick={() => handleRemovingTag(tag)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                />
              </svg>
            </button>
          </p>
        ))}
      </div>
      <button
        className="cursor-pointer col-start-2 ml-auto self-center text-gray-400 preset-3-b hover:text-green-400"
        onClick={handleRemoveAllTags}
      >
        Clear
      </button>
    </section>
  );
}
