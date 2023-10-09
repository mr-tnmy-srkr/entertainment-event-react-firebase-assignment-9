import React from "react";

const Accordian = () => {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What is the date and time of the event?
        </div>
        <div className="collapse-content">
          <p>7th December 2023 to 12th December 2023</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Is there an age restriction for the event?
        </div>
        <div className="collapse-content">
          <p>There is no age restrictions</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How can I purchase tickets for the event?
        </div>
        <div className="collapse-content">
          <p>Available on online ticketing platforms and at box office </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is the event's refund or exchange policy?
        </div>
        <div className="collapse-content">
          <p>There is no refund or exchange</p>
        </div>
      </div>  <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Is parking available at the venue?
        </div>
        <div className="collapse-content">
          <p>Yes of course</p>
        </div>
      </div>  <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Is photography or videography allowed during the event?
        </div>
        <div className="collapse-content">
          <p> Photography, video recording are both allowed</p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
