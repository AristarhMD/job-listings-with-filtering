import data from "../Data.jsx";
import Card from "./reusable/Card.jsx";

function App() {
  return (
    <>
      <section className="flex flex-col gap-4">
        {data.map((card, idx) => (
          <Card key={idx} data={card} />
        ))}
      </section>
    </>
  );
}

export default App;
