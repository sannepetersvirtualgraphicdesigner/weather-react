import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(
      `The weather in ${response.data.name} is ${response.data.main.temp} degrees C`
    );
  }
  let units = "metric";
  let apiKey = "e347c1e77eff0865f24ace0de5ae743f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <Loader
      type="ThreeDots"
      color="orange"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}
