import { useState } from "react";
import data from "../Data.jsx";
import Card from "./reusable/Card.jsx";
import Filter from "./Filter.jsx";

function App() {
  const [tagFilter, setTagFilter] = useState([]);

  const filteredCompanies = data.filter((company) =>
    tagFilter.every((tag) => company.tags.includes(tag)),
  );

  return (
    <>
      <header className="w-full h-39 bg-green-400  bg-header-mobile md:bg-header-desktop bg-cover bg-center md:bg-left"></header>
      <main className="bg-green-50 pt-14 pb-9 md:pb-20 xl:pt-19 xl:pb-30 w-full">
        {tagFilter.length > 0 && (
          <Filter filteredTags={tagFilter} setFilteredJob={setTagFilter} />
        )}
        <section className="card-section">
          {filteredCompanies.map((card) => (
            <Card
              key={card.id}
              data={card}
              filteredTags={tagFilter}
              setFilteredJob={setTagFilter}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
