import React, { useState, useRef, useEffect } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownListContainer,
  DropdownListItem,
} from "./styles";
import ArrowDropDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface DropdownProps {
  items: string[];
  onSelect: (item: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    undefined
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownHeader
        selectedItem={selectedItem}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem ? `$${selectedItem}` : "$10 - $100"}
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </DropdownHeader>

      {isOpen && (
        <DropdownListContainer>
          {items.map((item, index) => (
            <DropdownListItem key={index} onClick={() => handleItemClick(item)}>
              ${item}
            </DropdownListItem>
          ))}
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
