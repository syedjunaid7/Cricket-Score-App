import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
export default function App() {
    const [data, setData] = useState([]);
    const imgC = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png'
  const apiKey = "a6a729e8-9bbf-45d2-b8ea-3abff4381eb0";

    useEffect(() => {
      api();
    }, []);

    function api() {
      fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res.data);
        });
    }

  return (
    <>
    <h1>Match Score Cards</h1>
      {data.map((item, id) => (
        <div class="card">
          <div class="card-content">
            <div class="card-top">
              <span class="card-title">{item.matchType}</span>
              <p >{item.date}</p>
            </div>
            <div class="card-bottom">
              <p>{item.status}</p>
              
            </div>
          </div>
          <div class="card-image">
            <div class="container">
              <div class="title">
              <img src={item.teamInfo[0].img} />
              <h3>{item.teams[0]}</h3>        
              </div>
              <div class="center">VS</div>
              <div class="title">
              <img src={item.teamInfo[1]!==undefined?item.teamInfo[1].img: imgC} alt="no-image"/>
              <h3>{item.teams[1]}</h3> 
              </div>
            </div>
          </div>
          <p className="venue">Venue: {item.venue}</p>
        </div>
      ))

      }
    </>
  );
}
