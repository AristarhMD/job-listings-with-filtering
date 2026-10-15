export default function Card({ data }) {
  return (
    <aside className="card">
      <div className="flex flex-col gap-4">
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
            <p className="work-info">{data.posted}</p>
            <span className="size-1 rounded-full bg-gray-300"></span>
            <p className="work-info">{data.typeOfWork}</p>
            <span className="size-1 rounded-full bg-gray-300"></span>
            <p className="work-info">{data.location}</p>
          </div>
        </div>
        <hr />
        <div className="flex gap-2 flex-wrap">
          {data.tags.map((tag) => (
            <span className="tag-btn">{tag}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}
