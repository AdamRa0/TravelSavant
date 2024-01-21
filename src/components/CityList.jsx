import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
};

export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message={"Add first city by clicking on city on map"} />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
