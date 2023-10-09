import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ViewDetails = () => {
  const [findEvent, setFindEvent] = useState([]);
const navigate = useNavigate()

  const {
    name,
    price,
    description,
    date,
    star_rating,
    image,
  } = findEvent || {};
  console.log(findEvent);
  const { events } = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const findData = events.find((event) => event.id === parseInt(id));
    console.log(findData);
    setFindEvent(findData);
  }, [events, id]);

  return (
    <div className="my-8">
    
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
        <div className="flex-1">
            <img className="rounded-xl" src={image} alt="" />
        </div>
        <div className="flex-1 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{name}</h1>
            <p className="text-xl">{description}</p>
            <p className="text-2xl font-medium">Event Date : {date}</p>
            <p className="text-2xl font-medium">Price : $ {price}</p>
          <div className="flex md:justify-between md:items-center flex-col md:flex-row gap-4 md:gap-0">
          <StarRatings
          rating={star_rating}
          starRatedColor="blue"
          numberOfStars={6}
          starDimension="30px"
        starSpacing="5px"
        />
     <div className="flex gap-4">
     <div>
       <button onClick={()=>{navigate('/')}} className="btn btn-info capitalize">go Back</button>
       </div>
       <div>
       <button className="btn btn-info capitalize">Book Now</button>
       </div> 
     </div> </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
