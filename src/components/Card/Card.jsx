import QRCode from "react-qr-code";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
// import StarRatings from "react-star-ratings";


const Card = ({event}) => {

        const {id,name,price,card_background,description,date,star_rating,image} = event || {};

        const card_bgi = {
          backgroundImage: `url(${card_background})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }

  return (
    // <div className="grid md:grid-cols-2 gap-5">
      <div className="grid md:grid-cols-3  font-lato ">
        <div style={card_bgi} className={`col-span-2 h-full  p-6 shadow-xl rounded-xl`}>
          <h1 className="font-koulen text-3xl pb-4">
           {name} <span className="text-lg ml-4">2023</span>
          </h1>
         
          <div className="outline-dashed outline-2 outline-offset-2">
            <div className="p-4">
              {/* <h2 className="text-xl font-medium mb-1">100% ONLINE EVENT</h2> */}
              {/* <p className="text-lg font-medium">DESIGNERS</p> */}
              <div className="flex justify-between">
                <div className="">
                  <p className="font-bold pt-1 ">
                    Ticket price:
                    <span className="text-xl font-bold"> $ {price}</span>
                  </p>
                  <div className="pt-3">
                    <p className="text-xl font-semibold ">DECEMBER</p>
                    <p className="">
                      <span className="text-2xl">{date}</span>
                      {/* <span className="text-2xl">20</span> */}
                    </p>
                    <p>

                   
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className="md:hidden"
                    style={{
                      height: "auto",
                      margin: "0 auto",
                      maxWidth: 96,
                      width: "100%",

                      //   position: "absolute",
                      //   top: "50%",
                      //   left: "50%",
                      //   transform: "translate(-50%, -50%)",
                    }}
                  >
                    <img className="w-full h-full" src={image} alt="" />
                  </div>

                  <div className="hidden md:block ">
                    <img className="w-48" src={image} alt="" />
                  </div>
                  <div className="mt-6 md:hidden">
                   <Link to={`/viewDetails/${id}`}> <button className="btn btn-primary btn-sm capitalize">
                      View Details
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-span-1 h-full bg-qrBg bg-no-repeat bg-cover rounded-r-xl hidden md:block shadow-xl">
            <div className="flex flex-col h-full gap-6 justify-center items-center">
              <div>
                <img className="h-12" src={logo} alt="" />
              </div>

              <div
                style={{
                  height: "auto",
                  margin: "0 auto",
                  maxWidth: 96,
                  width: "100%",
                }}
              >
                <QRCode
                  size={300}
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                  value={`www.google.com`}
                  viewBox={`0 0 256 256`}
                />
              </div>

              <div className="text-center">
              <Link to={`/viewDetails/${id}`}><button className="btn capitalize">View Details</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Card;
