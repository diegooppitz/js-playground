// libs
import React, { useEffect, useRef, useState } from "react";

// helpers
import { manageLocalStorage } from "../helpers/functions";

// components
import SearchForm from "../components/searchForm";
import CitiesList from "../components/citiesList";

// styles
import styles from "../styles/Home.module.scss";

const Home = () => {
  const [cities, setCities] = useState([]);
  const hasCitiesLoaded = useRef(false);

  const getStoragedCities = () => {
    if (hasCitiesLoaded?.current) return;
    manageLocalStorage();
    const storedCities = JSON.parse(localStorage.getItem("citiesArray")) || [];
    setCities(storedCities);

    hasCitiesLoaded.current = true;
  };

  useEffect(() => {
    getStoragedCities();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.appTitle}>Weather App</h1>
      <SearchForm setCities={setCities} />
      <CitiesList cities={cities} setCities={setCities} />
    </div>
  );
};

export default Home;
