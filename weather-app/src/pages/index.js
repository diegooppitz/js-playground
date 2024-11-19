// libs
import React, { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";

// assets
import closeIcon from "../assets/cancel.png";

// helpers
import { isCityInStorage, manageLocalStorage } from "../helpers/functions";
import { toastConfig, api_url } from "../helpers/constants";

// styles
import styles from "../styles/Home.module.css";

const Home = () => {
  const [citySearch, setCitySearch] = useState("");
  const [cities, setCities] = useState([]);
  const hasCitiesLoaded = useRef(false);

  const removeCity = (index) => {
    const updatedCities = [...cities];
    updatedCities.splice(index, 1);
    localStorage.setItem("citiesArray", JSON.stringify(updatedCities));
    setCities(updatedCities);
  };

  const getCityWeather = async (city) => {
    if (!city) {
      toast.error("Invalid Search Value", toastConfig);
      return;
    }

    try {
      const response = await fetch(`${api_url}&q=${city}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.error) {
        toast.error(data.error.message, toastConfig);
        return null;
      }

      return data;
    } catch (error) {
      toast.error("An unexpected error occurred", toastConfig);
      return null;
    }
  };

  const addCity = async () => {
    const cityData = await getCityWeather(citySearch);

    if (!cityData) return;

    const storedCities = JSON.parse(localStorage.getItem("citiesArray")) || [];

    if (isCityInStorage({ city: cityData, cities: storedCities })) {
      toast.error("City already registered!", toastConfig);
      return;
    }

    storedCities.unshift(cityData);
    localStorage.setItem("citiesArray", JSON.stringify(storedCities));
    setCities([...storedCities]);
  };

  const getStoragedCities = () => {
    if (hasCitiesLoaded?.current) return; 
      manageLocalStorage();
      const storedCities = JSON.parse(localStorage.getItem("citiesArray")) || [];
      setCities(storedCities);

      hasCitiesLoaded.current = true;
  }

  const onChangeCitySearch = (e) => {
    setCitySearch(e.target.value);
  };

  useEffect(() => {
    getStoragedCities();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.appTitle}>Weather App</h1>
        <div className={styles.form}>
          <input
            value={citySearch}
            onChange={onChangeCitySearch}
            placeholder="Search for a city"
          />
          <button onClick={addCity}>Search</button>
        </div>

        <div className={styles.citiesContainer}>
          {cities.map((item, index) => {
            const location = item?.location;
            const current = item?.current;

            if (current && location) {
              return (
                <div
                  key={location.lat}
                  className={`${styles.cityCard} animate__animated animate__fadeIn`}
                >
                  <Image
                    onClick={() => removeCity(index)}
                    src={closeIcon}
                    className={styles.closeIcon}
                    alt="Exclude city"
                    width={20}
                    height={20}
                  />
                  <h3>{location.name}</h3>
                  {current && (
                    <>
                      <p className={styles.tempText}>
                        {Math.round(current.temp_c)}
                        <span>°C</span>
                      </p>
                      {current.condition.icon && (
                        <Image
                          src={`https:${current.condition.icon}`}
                          alt={`Weather condition in ${location.name}`}
                          width={0}
                          height={0}
                          sizes="100%"
                          style={{ width: "auto", height: "auto" }}
                        />
                      )}
                      <p className={styles.condText}>{current.condition.text}</p>
                    </>
                  )}
                </div>
              );
            } else return null;
          })}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
