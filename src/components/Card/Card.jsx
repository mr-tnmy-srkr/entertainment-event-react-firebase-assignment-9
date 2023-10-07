import QRCode from "react-qr-code";
import qrBg from '../../assets/Rectangle2.png'
import cardBg from '../../assets/Rectangle1.png'


const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div  className="grid grid-cols-2  font-lato ">
      <img src={cardBg} alt="" className=""/>
        <div className="col-span-2 h-full  p-6 shadow-xl rounded-xl">
          <h1 className="font-koulen text-3xl pb-4">
            DiGITAL MEDIA <span className="text-lg">2023</span>{" "}
          </h1>
          <hr className="  " />
          <div className="   outline-dashed outline-2 outline-offset-2">
            <div className="p-4">
              <h2 className="text-2xl font-medium mb-1">100% ONLINE EVENT</h2>
              <p className="text-xl font-medium">DESIGNERS</p>
              <div className="flex justify-between">
                <div className="">
                  <p className="font-normal pt-1">
                    Ticket price:{" "}
                    <span className="text-xl font-bold">U$ 524</span>
                  </p>
                  <div className="pt-3">
                    <p className="text-2xl font-semibold ">DECEMBER</p>
                    <p className="">
                      <span className="text-4xl">15</span> to{" "}
                      <span className="text-4xl">20</span>
                    </p>
                  </div>
                </div>
                <div className="relative">
                <img src={qrBg} alt="" />
                  <div
                    style={{
                      height: "auto",
                      margin: "0 auto",
                      maxWidth: 64,
                      width: "100%",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  
                  >
                    <QRCode
                      size={256}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={`www.google.com`}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //dynamic na */}
      <div className="grid grid-cols-2  font-lato">
        <div className="col-span-2 h-full bg-gray-300 p-6">
          <h1 className="font-koulen text-3xl">
            DiGITAL MEDIA <span className="text-lg">2023</span>{" "}
          </h1>
          <hr className="  " />
          <div className="   outline-dashed outline-2 outline-offset-2">
            <div className="p-4">
              <h2 className="text-2xl font-medium">100% ONLINE EVENT</h2>
              <p className="text-xl font-medium">DESIGNERS</p>
              <p className="font-normal">
                Ticket price: <span className="text-xl font-bold">U$ 524</span>
              </p>
              <p className="text-2xl font-semibold">DECEMBER</p>
              <p>
                <span className="text-4xl">15</span> to{" "}
                <span className="text-4xl">20</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 font-lato">
        <div className="col-span-2 h-full  p-6">
          <h1 className="font-koulen text-3xl">
            DiGITAL MEDIA <span className="text-lg">2023</span>{" "}
          </h1>
          <hr className="  " />
          <div className="   outline-dashed outline-2 outline-offset-2">
            <div className="p-4">
              <h2 className="text-2xl font-medium">100% ONLINE EVENT</h2>
              <p className="text-xl font-medium">DESIGNERS</p>
              <p className="font-normal">
                Ticket price: <span className="text-xl font-bold">U$ 524</span>
              </p>
              <p className="text-2xl font-semibold">DECEMBER</p>
              <p>
                <span className="text-4xl">15</span> to{" "}
                <span className="text-4xl">20</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* close */}
    </div>
  );
};

export default Card;
