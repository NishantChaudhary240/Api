import axios from "axios";
import React, { useState } from "react";

export default function Horoscope() {
  const [horoscope, setHoroscope] = useState([]);
  const getHoroscope = () => {
    axios.get("https://youthsforum.com/horoscope/").then((response) => {
      setHoroscope(response.data.rashi);
    });
  };
  return (
    <>
      <h1
        className="text-center py-4 text-danger fw-bold"
        onClick={getHoroscope}
      >
        Rashi
      </h1>
      <div className="text-center">
        <button className="btn btn-danger" onClick={getHoroscope}>
          Get your rashi
        </button>
      </div>
      <hr />

      <div className="container mt-5">
        <div className="row">
          {horoscope.map((horoscopes) => {
            return (
              <div className="col-3">
                <div className="box p-3 my-2 border rounded">
                  <h5 className="text-center pb-3">{horoscopes.rashiName}</h5>
                  <h6 className="text-center">{horoscopes.alphabets}</h6>
                  <figure>
                    <img src={horoscopes.imgURL} className="w-100" />
                  </figure>
                  <h6>{horoscopes.text}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
