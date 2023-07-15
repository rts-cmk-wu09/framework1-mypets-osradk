import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../components/DropdownInput.css"; 

const DropdownInput = ({ data, onSelectCity }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const cities = data
    ? [...new Set(data.animals.map((animal) => animal.contact.address.city))]
    : [];

  if (cities != null) {
    cities.unshift("All");
  }

  const handleSelectOption = (event) => {
    const selectedCity = event.target.value;
    setSelectedOption(selectedCity);
    onSelectCity(selectedCity); // Trigger the callback with the selected city
  };
  return (
    <div className="dropdown-input-container">
      <div className="input-wrapper">
        <FaMapMarkerAlt className="location-icon" />
        <select
          className="dropdown-input"
          value={selectedOption}
          onChange={handleSelectOption}
        >
          <option value="">Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
     
    </div>
  );
};

export default DropdownInput;
