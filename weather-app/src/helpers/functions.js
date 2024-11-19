// manage local storage and clear after 24hours without changes
export const manageLocalStorage = () => {
  const hours = 24;
  const now = new Date().getTime();
  const setupTime = localStorage.getItem("setupTime");
  if (setupTime == null) {
    localStorage.setItem("setupTime", now);
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.clear();
      localStorage.setItem("setupTime", now);
    }
  }
};

// Check if a city is already in localStorage
export const isCityInStorage = ({ city, cities }) => {
    if (!Array.isArray(cities) || !city?.location) return false;
  
    const { lon: cityLon, lat: cityLat } = city.location;
  
    return cities.some((item) => {
      if (!item?.location) return false;
      const { lon, lat } = item.location;
      return lon === cityLon && lat === cityLat;
    });
  };