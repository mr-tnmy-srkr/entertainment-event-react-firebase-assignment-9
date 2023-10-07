import QRCode from "react-qr-code";
import logo from "../../assets/Logo.png";

const Card = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="grid md:grid-cols-3  font-lato h-48">
        <div className="col-span-2 h-full  p-6 shadow-xl rounded-xl bg-cardBg">
          <h1 className="font-koulen text-3xl pb-4">
            DiGITAL MEDIA <span className="text-lg ml-40">2023</span>{" "}
          </h1>
          <hr className="  " />
          <div className="   outline-dashed outline-2 outline-offset-2">
            <div className="p-4">
              <h2 className="text-xl font-medium mb-1">100% ONLINE EVENT</h2>
              <p className="text-lg font-medium">DESIGNERS</p>
              <div className="flex justify-between">
                <div className="">
                  <p className="font-normal pt-1">
                    Ticket price:
                    <span className="text-xl font-bold">U$ 524</span>
                  </p>
                  <div className="pt-3">
                    <p className="text-xl font-semibold ">DECEMBER</p>
                    <p className="">
                      <span className="text-2xl">15</span> to{" "}
                      <span className="text-2xl">20</span>
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

                  <div className="hidden md:block ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="60"
                      viewBox="0 0 52 44"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_32_130)">
                        <path
                          d="M22.8601 0.4151L51.0641 28.505V43.5849H37.9022V33.926L17.4173 13.5237H13.1619V43.5849H0V0.4151H22.8601ZM37.9022 15.3964V0.4151H51.0641V15.3964H37.9022Z"
                          fill="black"
                          fill-opacity="0.25"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_32_130">
                          <rect width="52" height="44" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="mt-2 md:hidden">
                    <button className="btn btn-primary btn-sm capitalize">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-span-1 h-full bg-qrBg bg-no-repeat bg-cover rounded-r-xl hidden md:block">
            <div className="flex flex-col h-full gap-10 justify-center items-center">
              <div>
                <img className="h-12" src={logo} alt="" />
              </div>

              <div
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
                <button className="btn capitalize">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
