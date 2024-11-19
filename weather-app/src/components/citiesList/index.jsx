// libs
import React from "react";
import Image from "next/image";

// assets
import closeIcon from "../../assets/cancel.png";

// styles
import styles from "./citiesList.module.scss";

const CitiesList = ({ cities, setCities }) => {
  const removeCity = (index) => {
    const updatedCities = [...cities];
    updatedCities.splice(index, 1);
    localStorage.setItem("citiesArray", JSON.stringify(updatedCities));
    setCities(updatedCities);
  };

  return (
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
  );
};

export default CitiesList;
