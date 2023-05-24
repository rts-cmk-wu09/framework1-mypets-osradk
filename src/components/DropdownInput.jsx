import  { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './DropdownInput.css'; // Import custom CSS file for component styling

const DropdownInput = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['New York City', 'Danmark', 'Irak'];

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
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
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {selectedOption && <p className="selected-option">Selected option: {selectedOption}</p>}
    </div>
  );
};

export default DropdownInput;
