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
    
      <div className="flex ">
        <div className="flex-1">
            <img className="rounded-xl" src={image} alt="" />
        </div>
        <div className="flex-1">
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{price}</p>
            <p>{description}</p>
            <StarRatings
          rating={star_rating}
          starRatedColor="blue"
          numberOfStars={6}
          name='rating'
        />
       <div>
       <button onClick={()=>{navigate(-1)}} className="btn btn-info capitalize">go Back</button>
       </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
