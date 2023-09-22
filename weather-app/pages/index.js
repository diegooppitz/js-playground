// libs
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "animate.css";

// assets
import closeIcon from "../public/cancel.png"

// helpers
import { checkHaveCity, manageLocalStorage, routerPush } from "../helpers";

// styles
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const [citySearch, setCitySearch] = useState();
  const [cities, setCities] = useState();

  function removeCity(index) {
    const citiesArray = cities;
    citiesArray.splice(index, 1);
    localStorage.setItem('citiesArray', JSON.stringify(citiesArray));
    routerPush({ home: true })
  }

  function configCity() {
    const citiesLocalStorage = JSON.parse(localStorage.getItem('citiesArray')) ?? [];
    if (data && !checkHaveCity({ city: data, cities: citiesLocalStorage })) {
      citiesLocalStorage.splice(0, 0, data);
      localStorage.setItem('citiesArray', JSON.stringify(citiesLocalStorage));
    }

    setCities([...citiesLocalStorage]);
  }

  function onChangeCitySearch(e) {
    const val = e?.target?.value;
    if (val != null && val != undefined) setCitySearch(val);
  }

  function pushRoute() {
    if(citySearch) routerPush({ citySearch })
  }

  useEffect(() => {
    manageLocalStorage();
    configCity();
  }, [])

  return (
    <>
      <div className={styles.container}>
        <h1  className={styles.appTitle}>Weather App</h1>
        <div className={styles.form}>
          <input onChange={onChangeCitySearch} placeholder="Search for a city" />
          <button onClick={pushRoute}>Search</button>
        </div>

        <div className={styles.citiesContainer}>
          {cities && (cities.map((item, index) => (
            <div key={item.location.lat} className={`${styles.cityCard} animate__animated animate__fadeIn`}>
              <Image onClick={() => removeCity(index)} src={closeIcon} className={styles.closeIcon} alt="Exclude city" width={20} />
              <h3>{item.location.name}</h3>
              <p className={styles.tempText}>{Math.round(item.current.temp_c)}<span>°C</span></p>
              <img src={`https:${item.current.condition.icon}`} />
              <p className={styles.condText}>{item.current.condition.text}</p>
            </div>
          )))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  let data;
  const { query } = context;
  const city = query?.city;

  // .env data
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  if (city) {
    const response = await fetch(
      `${api_url}?key=${api_key} &q=${city}&aqi=no`
    );
    data = await response.json();
  }

  return {
    props: {
      data: data ?? "",
    },
  };
}
