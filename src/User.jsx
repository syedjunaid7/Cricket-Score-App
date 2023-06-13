import { useEffect } from "react";

export default function User({ data, count }) {
  useEffect(() => {
    alert("Inside useEffect  " + count);
  }, [count]);
//   useEffect(() => {
//     alert("Inside useEffect  " + data);
//   }, [data]);
  return (
    <>
      <h1>Count Props : {count}</h1>
      <h1>Data Props : {data}</h1>
    </>
  );
}
