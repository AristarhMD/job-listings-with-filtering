import { Fragment } from "react";
import TagButton from "./TagButton";

export default function Card({ data, filteredTags, setFilteredJob }) {
  return (
    <aside
      className={`card ${data.badge.includes("featured") ? "card-featured" : ""}`}
    >
      <div className="flex flex-col xl:flex-row xl:items-center gap-4">
        <img
          src={data.iconSvg}
          alt={`Logo of the ${data.companyName} company`}
          className="company-logo"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-start gap-4">
            <p className="company">{data.companyName}</p>
            <div className="flex gap-2 items-center justify-center">
              {data.badge.map((badge, idx) => (
                <span
                  key={`${idx}badge`}
                  className={`badge ${badge === "new!" ? "badge-new" : ""}`}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <p className="function">{data.function}</p>
          <div className="flex items-center gap-2">
            {data.jobInfo.map((description, idx, arr) => (
              <Fragment key={description}>
                <p className="work-info">{description}</p>
                {idx !== arr.length - 1 && (
                  <span className="size-1 rounded-full bg-gray-300"></span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <hr className="border-gray-300 xl:hidden" />
        <div className="flex gap-2 flex-wrap xl:flex-nowrap xl:ml-auto">
          {data.tags.map((tag, idx) => (
            <TagButton
              key={`${idx}tag`}
              style="tag-btn"
              filteredTags={filteredTags}
              setFilteredJob={setFilteredJob}
            >
              {tag}
            </TagButton>
          ))}
        </div>
      </div>
    </aside>
  );
}
