import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import City from "./components/City";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

const URL = "http://localhost:8000";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There was an error fetching data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
          <Route path="cities/:id" element={<City />}/>
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
