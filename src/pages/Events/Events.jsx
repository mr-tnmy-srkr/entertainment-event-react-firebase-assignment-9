import { Map, Marker } from "pigeon-maps"
import { osm } from 'pigeon-maps/providers'
import { Helmet } from "react-helmet-async";


const Events = () => {
  return (
    <div>
      <Helmet>
        <title>Events | World</title>
      </Helmet>
      <h1 className="text-4xl font-semibold text-center mt-8">
        Our Events in the World
      </h1>
      <div className="shadow-xl">
      <h2 className="text-center text-3xl font-semibold my-5">India</h2>
     <div className="flex">
      <div className="flex-1">
        <img className="rounded-lg object-cover w-full" src="https://i.ibb.co/jZ7qyny/pexels-wendy-wei-1677710.jpg" alt="" />
      </div>
      <div className="flex-1 rounded-lg">
      <Map defaultCenter={[ 22.57, 88.36]} defaultZoom={11}>
      <Marker width={50} anchor={[ 22.57, 88.36]} />
    </Map>
      </div>
      </div>
     </div>
  
     <div className="shadow-xl">
      <h2 className="text-center text-3xl font-semibold my-5">Bangladesh</h2>
     <div className="flex">
      <div className="flex-1">
        <img className="rounded-lg object-cover w-full" src="https://i.ibb.co/D5V6n9J/pexels-annam-w-1047442-1.jpg" alt="" />
      </div>
      <div className="flex-1 rounded-lg">
      <Map defaultCenter={[23.8041, 90.4152]} defaultZoom={11}>
      <Marker width={50} anchor={[23.8041, 90.4152]} />
    </Map>
      </div>
      </div>
     </div>

     <div className="shadow-xl">
      <h2 className="text-center text-3xl font-semibold my-5">Sri lanka</h2>
     <div className="flex">
      <div className="flex-1">
        <img className="rounded-lg object-cover w-full" src="https://i.ibb.co/3TyW8Lw/pexels-teddy-yang-2263410.jpg" alt="" />
      </div>
      <div className="flex-1 rounded-lg">
      <Map defaultCenter={[6.92, 79.86]} defaultZoom={11}>
      <Marker width={50} anchor={[6.92, 79.86]} />
    </Map>
      </div>
      </div>
     </div>

     <div className="shadow-xl">
      <h2 className="text-center text-3xl font-semibold my-5">Nepal</h2>
     <div className="flex">
      <div className="flex-1">
        <img className="rounded-lg object-cover w-full" src="https://i.ibb.co/gT6N9Pq/pexels-jonathan-borba-3563173.jpg" alt="" />
      </div>
      <div className="flex-1 rounded-lg">
      <Map defaultCenter={[27.71, 85.32]} defaultZoom={11}>
      <Marker width={50} anchor={[27.71, 85.32]} />
    </Map>
      </div>
      </div>
     </div>

     <div className="shadow-xl">
      <h2 className="text-center text-3xl font-semibold my-5">China </h2>
     <div className="flex">
      <div className="flex-1">
        <img className="rounded-lg object-cover w-full" src="https://i.ibb.co/w04bQMS/pexels-harrison-haines-3122799-1.jpg" alt="" />
      </div>
      <div className="flex-1 rounded-lg">
      <Map defaultCenter={[39.90,116.40]} defaultZoom={11}>
      <Marker width={50} anchor={[39.90,116.40]} />
    </Map>
      </div>
      </div>
     </div>

     <div className="shadow-xl">
      <h2 className="text-center text-3xl font-semibold my-5">Singapore</h2>
     <div className="flex">
      <div className="flex-1">
        <img className="rounded-lg object-cover w-full" src="https://i.ibb.co/6rx0rs6/pexels-ron-ferreira-2250092.jpg" alt="" />
      </div>
      <div className="flex-1 rounded-lg">
      <Map defaultCenter={[1.35,103.81]} defaultZoom={11}>
      <Marker width={50} anchor={[1.35,103.81]} />
    </Map>
      </div>
      </div>
     </div>

     <div className="mb-12 shadow-xl">
      <h2 className="text-center text-3xl font-semibold my-5">Japan</h2>
     <div className="flex">
      <div className="flex-1">
        <img className="rounded-lg object-cover w-full" src="https://i.ibb.co/dM76dn4/pexels-rahul-pandit-3319726.jpg" alt="" />
      </div>
      <div className="flex-1 rounded-lg">
      <Map defaultCenter={[35.67,139.65]} defaultZoom={11}>
      <Marker width={50} anchor={[35.67,139.65]} />
    </Map>
      </div>
      </div>
     </div>


    </div>
  );
};

export default Events;

