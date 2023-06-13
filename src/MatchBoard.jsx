import React from "react";

export default function MatchBoard({ data }) {
    console.log(data);
  return (
    <div>
{data.map((item, id) => (
    <div>
      <h1>Contest Name: {item.name}</h1>
      <h3>Competition: {item.t20}</h3>
      <h3>Venue: {item.venue} </h3>
      <h5>Date: {item.date}</h5>
      <h2>
        {item.teams[0]} VS {item.teams[1]}
      </h2>
      <h4>Result: {item.status}</h4>
      <hr/>
    </div>
    
  ))}
    </div>
  );
}
