import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Formm from "./components/Formm";
import Formm2 from "./components/Formm2";

function App() {
  const time = new Date();

  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState(0);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [temp, setTemp] = useState(0);
  const [desc, setDesc] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");
  const [visibility, setVisibility] = useState("");
  const [icon, setIcon] = useState("");
  const [sunSet, setSunSet] = useState(0);

  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);

    let hrs = date.getHours();

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    return `${hrs}:${min} `;
  };

  useEffect(() => {
    let apiKey = "90d297e7c8d647f9d52672103dc5075e";
    // eslint-disable-next-line
    if (city == "") {
      return;
    }
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setLat(result[0].lat);
        setLon(result[0].lon);
      })
      .catch((err) => {
        alert(err);
        alert("Wrong city name");
      });
  }, [city]);
  useEffect(() => {
    let apiKey = "90d297e7c8d647f9d52672103dc5075e";
    // eslint-disable-next-line
    if (pincode == 0) {
      return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${pincode},in&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setDesc(result.weather[0].description);
        setTemp((result.main.temp - 273.15).toFixed(2));
        setHumidity(result.main.humidity);
        setPressure(result.main.pressure);
        setVisibility(result.visibility);
        setIcon(
          `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
        );
        let temp = result.sys.sunset;
        let date1 = new Date(temp);

        setSunSet(formatDate(date1));
      })
      .catch((err) => {
        console.log(err);
        alert("Wrong city name 2");
      });
  }, [pincode]);
  useEffect(() => {
    // eslint-disable-next-line
    if (lat && lon == 0) {
      return;
    }
    let apiKey = "90d297e7c8d647f9d52672103dc5075e";
    // eslint-disable-next-line
    if (city == "") {
      return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setDesc(result.weather[0].description);
        setTemp((result.main.temp - 273.15).toFixed(2));
        setHumidity(result.main.humidity);
        setPressure(result.main.pressure);
        setVisibility(result.visibility);
        setIcon(
          `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
        );

        let temp = result.sys.sunset;
        let date1 = new Date(temp);

        setSunSet(formatDate(date1));
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [lat, lon]);

  return (
    <div className="App">
      <div className="top">
        <Formm setCity={setCity} />
        <h6>OR</h6>
        <Formm2 setPincode={setPincode} />
      </div>
      <hr />
      {temp !== 0 ? (
        <div className="mainContainer">
          <div className="container">
            <div className="container1">
              <div className="left">Current Weather</div>
              <div className="left">
                {time.getHours()}:{time.getMinutes()}
              </div>
              <div className="image left">
                <img src={icon} alt="Icon" />
                <div className="temp">{temp}&#8451;</div>
              </div>

              <div className="desc left">{desc}</div>
            </div>
            <div className="container2">
              <div>Humdity: {humidity}</div>
              <hr />
              <div>Pressure: {pressure}</div>
              <hr />
              <div>Visibilty: {visibility}m</div>
              <hr />
              <div>Sunset: {sunSet}</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
//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
