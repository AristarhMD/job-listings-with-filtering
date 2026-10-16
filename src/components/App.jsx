import data from "../Data.jsx";
import Card from "./reusable/Card.jsx";

function App() {
  return (
    <>
      <header className="w-full h-39 bg-green-400  bg-header-mobile md:bg-header-desktop bg-cover bg-center md:bg-left"></header>
      <main className="bg-green-50 pt-14 pb-9 md:pb-20 xl:pt-19 xl:pb-30 w-full">
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
