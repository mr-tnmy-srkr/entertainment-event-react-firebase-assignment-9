import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Card from "../../components/Card/Card";

const Home = () => {
  const { events } = useLoaderData();
  console.log(events);

  return (
    <div>
      <Banner></Banner>
      <h2 className="text-4xl">This is home</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {events?.map((event) => {
          return <Card key={event.id} event={event}></Card>;
        })}
      </div>
    </div>
  );
};

export default Home;
