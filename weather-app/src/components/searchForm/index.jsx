// libs
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

// helpers
import { hasApiKey, isCityInStorage } from "../../helpers/functions";
import { toastConfig, api_url, api_key } from "../../helpers/constants";

// styles
import styles from "./searchForm.module.scss";

const SearchForm = ({ setCities }) => {
  const [citySearch, setCitySearch] = useState("");

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

      if (data?.error) {
        const errorCode = data?.error?.code;
        const errorMessage = errorCode === 2008
          ? "Enable your API_KEY. See the project README."
          : data?.error?.message;

        toast.error(errorMessage, toastConfig);
        return null;
      }

      return data;
    } catch (error) {
      if (!hasApiKey(api_key)) {
        toast.error("Enable your API_KEY. See the project README.", toastConfig);
        return;
      }
  
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
    setCitySearch("");
  };

  const onChangeCitySearch = (e) => {
    setCitySearch(e.target.value);
  };

  return (
    <>
      <div className={styles.searchForm}>
        <input value={citySearch} onChange={onChangeCitySearch} placeholder="Search for a city" />
        <button onClick={addCity}>Search</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default SearchForm;
