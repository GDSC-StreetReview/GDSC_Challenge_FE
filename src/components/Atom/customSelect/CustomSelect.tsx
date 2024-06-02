import { SetStateAction, useState } from "react";
import { Text } from "../text/Text";
import "./CustomSelect.css";

interface customSelectProps {
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}
const CustomSelect = ({
  options,
  selectedOption,
  setSelectedOption,
}: customSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: SetStateAction<string>) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select-wrapper">
      <div className="custom-select-header" onClick={() => setIsOpen(!isOpen)}>
        <Text color="#000" fontSize="0.9375rem" fontWeight="700">
          {selectedOption}
        </Text>
      </div>
      {isOpen && (
        <div className="custom-select-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="custom-option"
              onClick={() => handleOptionClick(option)}
            >
              <Text color="#000" fontSize="0.9375rem" fontWeight="700">
                {option}
              </Text>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
