import styled, { keyframes } from "styled-components";

// Keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Modern Color Palette
const borderColor = "#e0e0e0";
const selectedBorderColor = "#007BFF";
const primaryBackgroundColor = "#ffffff";
const hoverBackgroundColor = "#f6f6f6";
const primaryTextColor = "#333";

// Dropdown Container
export const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
`;

// Dropdown Header
export const DropdownHeader = styled.div<{ selectedItem?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  border: 1px solid ${borderColor};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${primaryBackgroundColor};
  color: ${(props) => (props.selectedItem ? primaryTextColor : "#a9a9a9")};
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

// Arrow
export const ArrowIcon = styled.div<{ isOpen: boolean }>`
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 10px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: ${(props) => (props.isOpen ? "none" : "5px solid black")};
  border-bottom: ${(props) => (props.isOpen ? "5px solid black" : "none")};
  transition: 0.3s ease;
`;

// Dropdown List Container
export const DropdownListContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${primaryBackgroundColor};
  border: 1px solid ${borderColor};
  border-radius: 8px;
  animation: ${fadeIn} 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
`;

// Dropdown List Item
export const DropdownListItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: ${primaryTextColor};

  &:hover {
    background-color: ${hoverBackgroundColor};
  }
`;

