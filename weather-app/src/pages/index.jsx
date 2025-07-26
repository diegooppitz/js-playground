// libs
import { useEffect, useRef, useState } from "react";

// helpers
import { hasApiKey, manageLocalStorage } from "../helpers/functions";
import { api_key } from "../helpers/constants";

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

  const InfoError = () => (
    <div className={styles.infoError}>
      ⚠️ You must set a valid WeatherAPI key. Please check the project README.
    </div>
  );

  return (
    <div className={styles.container}>
      {!hasApiKey(api_key) ? <InfoError /> : null}

      <h1 className={styles.appTitle}>Weather App</h1>
      <SearchForm setCities={setCities} />
      <CitiesList cities={cities} setCities={setCities} />
    </div>
  );
};

export default Home;
