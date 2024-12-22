import React, { useState, useEffect } from "react";
import axios from "axios";

const FilterPage = () => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Fetch city data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
        );
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle city change
  const handleCityChange = (e) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);
    setSelectedDistrict(""); // Reset district
    setWards([]); // Reset wards

    if (cityId) {
      const selectedCityData = cities.find((city) => city.Id === cityId);
      setDistricts(selectedCityData.Districts);
    } else {
      setDistricts([]);
    }
  };

  // Handle district change
  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);

    if (districtId) {
      const selectedDistrictData = districts.find(
        (district) => district.Id === districtId
      );
      setWards(selectedDistrictData.Wards);
    } else {
      setWards([]);
    }
  };

  return (
    <div>
      {/* City Selector */}
      <select
        className="form-select form-select-sm mb-3"
        id="city"
        value={selectedCity}
        onChange={handleCityChange}
      >
        <option value="">Chọn tỉnh thành</option>
        {cities.map((city) => (
          <option key={city.Id} value={city.Id}>
            {city.Name}
          </option>
        ))}
      </select>

      {/* District Selector */}
      <select
        className="form-select form-select-sm mb-3"
        id="district"
        value={selectedDistrict}
        onChange={handleDistrictChange}
        disabled={!selectedCity}
      >
        <option value="">Chọn quận huyện</option>
        {districts.map((district) => (
          <option key={district.Id} value={district.Id}>
            {district.Name}
          </option>
        ))}
      </select>

      {/* Ward Selector */}
      <select
        className="form-select form-select-sm"
        id="ward"
        disabled={!selectedDistrict}
      >
        <option value="">Chọn phường xã</option>
        {wards.map((ward) => (
          <option key={ward.Id} value={ward.Id}>
            {ward.Name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterPage;
