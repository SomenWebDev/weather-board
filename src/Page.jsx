import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

import clearSky from "./assets/backgrounds/clear-sky.jpg";
import fewClouds from "./assets/backgrounds/few-clouds.jpg";
import scatteredClouds from "./assets/backgrounds/scattered-clouds.jpg";
import rainyDay from "./assets/backgrounds/rainy-day.jpg";
import thunderstorm from "./assets/backgrounds/thunderstorm.jpg";
import snow from "./assets/backgrounds/snow.jpg";
import mist from "./assets/backgrounds/mist.jpeg";
import showerRain from "./assets/backgrounds/shower-rain.jpg";
import winter from "./assets/backgrounds/winter.jpg";
import sunny from "./assets/backgrounds/sunny.jpg";

const Page = () => {
  const { weatherData, loading } = useContext(WeatherContext);

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return rainyDay;

      case "Clouds":
        return scatteredClouds;

      case "Clear":
        return clearSky;
      case "Thunderstorm":
        return thunderstorm;
      case "Snow":
        return snow;
      case "Mist":
        return mist;
      case "Drizzle":
        return showerRain;

      case "Sunny":
        return sunny;

      case "Winter":
        return winter;

      case "Few Clouds":
        return fewClouds;
      case "Haze":
        return mist;
      default:
        return clearSky;
    }
  }

  const climateImage = getBackgroundImage(weatherData.climate);

  return (
    <>
      {loading.state ? (
        <div>
          <p>{loading.message}</p>
        </div>
      ) : (
        <div
          className="grid place-items-center h-screen mt-10 px-5 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${climateImage})` }}
        >
          <Header />
          <main>
            <section>
              <div className="container">
                <WeatherBoard />
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
