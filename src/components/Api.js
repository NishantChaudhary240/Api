import React, { useState } from "react";
import axios from "axios";
export default function Api() {
  const [newslist, setNewsList] = useState([]);

  const getNews = () => {
    axios.get("https://sportsguff.com/api/latest").then((response) => {
      setNewsList(response.data.newslist);
    });
  };
  return (
    <>
      <h1 className="text-center py-4" onClick={getNews}>
        Sport Guff
      </h1>
      <hr />
      <div className="container mt-5">
        <div className="row">
          {newslist.map((news) => {
            return (
              <div className="col-3 md-3">
                <div className="box p-1">
                  <figure>
                    <img src={news.image} className="w-100" />
                  </figure>
                  <h5>{news.title}</h5>
                  <small>{news.date}</small>
                  <p>{news.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
