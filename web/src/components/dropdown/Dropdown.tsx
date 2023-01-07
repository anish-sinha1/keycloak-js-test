import React from "react";

import { Link } from "react-router-dom";

export interface DropdownItem {
  text: string;
  path: string;
}

export interface DropdownProps {
  options: DropdownItem[];
}

const Dropdown: React.FC<{ props: DropdownProps }> = ({ props }) => {
  const options = props.options;
  const items = (
    <ul>
      {options.map((option: { text: string; path: string }) => (
        <li className="dropdown-option">
          <Link to={option.path}>{option.text}</Link>
        </li>
      ))}
    </ul>
  );
  return <div className="dropdown">{items}</div>;
};

export default Dropdown;
