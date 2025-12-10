import React from "react";
import { useLocalStorage } from "../hooks";
import { FavouriteContext } from "../context";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavourites((prev) => [...prev, { latitude, longitude, location }]);
  };

  const removeFromFavourites = (location) => {
    setFavourites((prev) => prev.filter((fav) => fav.location !== location));
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
