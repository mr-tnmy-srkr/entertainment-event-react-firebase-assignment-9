import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Card from "../../components/Card/Card";
import Countdown from "react-countdown";
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ProgramOrganizer from "../../components/Card/ProgramOrganizer";
// import Marquee from "react-fast-marquee";
import Accordion from "../../components/Accordion/Accordion";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { events } = useLoaderData();
  // console.log(events);

  // const Completionist = () => <span>You are good to go!</span>;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Helmet>
        <title>Events | Home</title>
      </Helmet>
      <Banner></Banner>

      <div className="text-4xl font-bold flex items-center justify-end mt-8">
        {/* <p className="text-xl mr-2">Remaining : </p>
        <Countdown date={"2023-12-07T18:00:00"}>
          <Completionist />
        </Countdown> */}

        {/* <Marquee pauseOnHover={true} speed={120}>
  <Link className="mr-12" to="/">
    I can be a React component, multiple React components, or just some
    text...
  </Link>
  <Link className="mr-12" to="/">
    I can be a React component, multiple React components, or just some
    text...
  </Link>
  <Link className="mr-12" to="/">
    I can be a React component, multiple React components, or just some
    text...
  </Link>
</Marquee> */}
      </div>
      <div data-aos="flip-down">
        <h2 className="text-4xl font-semibold mb-8 text-center">
          Our Services
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        {events?.map((event) => {
          return <Card key={event.id} event={event}></Card>;
        })}
      </div>
      <div className="mt-8 mb-16 px-6">
        <div data-aos="flip-up">
          <h2 className="my-8 text-center text-4xl font-semibold">
            Our Representative
          </h2>
        </div>
        <Slider {...settings}>
          <div>
            <h3>
              <div className="card w-72 glass">
                <figure>
                  <img
                    src="https://i.ibb.co/fYvMbjZ/jonas-kakaroto-mj-Rwhvq-EC0-U-unsplash-1.jpg"
                    alt="car!"
                  />
                </figure>
                <div className="card-body">
                  <div data-aos="flip-left">
                    <h1 className="card-title">Philip Martin</h1>
                  </div>
                  <div data-aos="flip-right">
                    <p>Event Director</p>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="card w-72 glass">
                <figure>
                  <img
                    src="https://i.ibb.co/82RTLs8/ethan-hoover-0-YHIlxe-Cuhg-unsplash-1.jpg"
                    alt="car!"
                  />
                </figure>
                <div className="card-body">
                  <div data-aos="flip-left">
                    <h1 className="card-title">Jonas Kakaroto</h1>
                  </div>
                  <div data-aos="flip-right">
                    <p>Event Manager</p>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="card w-72 glass">
                <figure>
                  <img
                    src="https://i.ibb.co/QMw2pLg/mubariz-mehdizadeh-t3zr-Em88ehc-unsplash.jpg"
                    alt="car!"
                  />
                </figure>
                <div className="card-body">
                  <div data-aos="flip-left">
                    <h1 className="card-title">Ransford Quaye</h1>
                  </div>
                  <div data-aos="flip-right">
                    <p>Production Manager</p>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="card w-72 glass">
                <figure>
                  <img
                    src="https://i.ibb.co/xD9gS7Z/michael-austin-jg-SAuq-Mm-JUE-unsplash.jpg"
                    alt="car!"
                  />
                </figure>
                <div className="card-body">
                  <div data-aos="flip-left">
                    <h1 className="card-title">Jeffery Erhunse</h1>
                  </div>
                  <div data-aos="flip-right">
                    <p>Sponsorship Manager</p>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="card w-72 glass">
                <figure>
                  <img
                    src="https://i.ibb.co/vJgnxxb/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg"
                    alt="car!"
                  />
                </figure>
                <div className="card-body">
                  <div data-aos="flip-left">
                    <h1 className="card-title">Joseph Gonzalez</h1>
                  </div>
                  <div data-aos="flip-right">
                    <p>Event Coordinator</p>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </Slider>
      </div>
      <div className="mb-8">
        <h2 className="text-4xl font-semibold text-center mb-8">FAQ</h2>
        <Accordion></Accordion>
      </div>
    </div>
  );
};

export default Home;
