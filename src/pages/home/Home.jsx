import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Card from "../../components/Card/Card";
import Countdown from "react-countdown";

const Home = () => {
  const { events } = useLoaderData();
  console.log(events);

  const Completionist = () => <span>You are good to go!</span>;
  
  return (
    <div>
      <Banner></Banner>
    <div className="text-4xl font-bold flex items-center justify-end my-8">
    <p className="text-xl mr-2">Remaining : </p>
    <Countdown date={'2023-12-07T18:00:00' }>
      <Completionist />
    </Countdown>
    </div>
      <h2 className="text-4xl font-semibold my-8 text-center">Our Services</h2>
      <div className="grid lg:grid-cols-2 gap-10">
        {events?.map((event) => {
          return <Card key={event.id} event={event}></Card>;
        })}
      </div>


      <div>
        hi
      </div>
    </div>
  );
};

export default Home;
