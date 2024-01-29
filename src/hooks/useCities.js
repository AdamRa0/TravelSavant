import { useContext } from "react";
import { CitiesContext } from "../context/citiesContext";

export default function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the cities provider");
  return context;
}
