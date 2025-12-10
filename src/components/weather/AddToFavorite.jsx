import { useContext, useEffect, useState } from "react";
import HeartIcon from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../context";
const AddToFavorite = () => {
  const { addToFavourites, removeFromFavourites, favourites } =
    useContext(FavouriteContext);

  // const [isFavourite, toggleFavourite] = useState(false);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  // useEffect(() => {
  //   const found = favourites.find((fav) => fav.location === location);

  //   toggleFavourite(found);
  // }, [favourites, location]);
  const isFavourite = favourites.some((fav) => fav.location === location);
  const handleFavorite = () => {
    if (!isFavourite) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorite}
          className=" text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Fav</span>
          <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavorite;
