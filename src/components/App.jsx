import data from "../Data.jsx";
import Card from "./reusable/Card.jsx";

function App() {
  return (
    <>
      <main className="bg-green-50 pt-14 xl:pt-19 w-full">
        <section className=" mx-auto grid xl:flex xl:flex-col grid-cols-1 md:grid-cols-2 md:max-w-2xl xl:w-full gap-10 md:gap-x-4 md:gap-y-12 xl:gap-6 place-items-center">
          {data.map((card, idx) => (
            <Card key={idx} data={card} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
