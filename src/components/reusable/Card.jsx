import TagButton from "./TagButton";

export default function Card({ data }) {
  return (
    <aside
      className={`card ${data.badge.includes("featured") ? "card-featured" : ""}`}
    >
      <div className="flex flex-col xl:flex-row xl:items-center gap-4">
        <img src={data.iconSvg} alt="" className="company-logo" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-start gap-4">
            <p className="company">{data.companyName}</p>
            <div className="flex gap-2 items-center justify-center">
              {data.badge.map((badge) => (
                <span
                  className={`badge ${badge === "new!" ? "badge-new" : ""}`}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <p className="function">{data.function}</p>
          <div className="flex items-center gap-2">
            {data.jobInfo.map((description, idx, arr) => {
              if (idx === arr.length - 1) {
                return <p className="work-info">{description}</p>;
              }
              return (
                <>
                  <p className="work-info">{description}</p>
                  <span className="size-1 rounded-full bg-gray-300"></span>
                </>
              );
            })}
          </div>
        </div>
        <hr className="border-gray-300 xl:hidden" />
        <div className="flex gap-2 flex-wrap">
          {data.tags.map((tag) => (
            <TagButton style="tag-btn">{tag}</TagButton>
          ))}
        </div>
      </div>
    </aside>
  );
}
