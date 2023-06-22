import React, { useState } from 'react';
import "./dropdown.css";
function DropdownMenu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const menuItems = [
    { id: 1, value: 'Tinsae' },
    { id: 2, value: 'Abdu' },
    { id: 3, value: 'Bereket' },
    { id: 3, value: 'Gedihon' },
    // Add more menu items here
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChange = (item) => {
    const isChecked = selectedItems.some((selected) => selected.id === item.id);
    if (isChecked) {
      setSelectedItems((prevItems) =>
        prevItems.filter((selected) => selected.id !== item.id)
      );
    } else {
      setSelectedItems((prevItems) => [...prevItems, item]);
    }
  };

  const filteredItems = menuItems.filter((item) =>
    item.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dropdown">
      <button className="dropdown-toggle">Select Items</button>
      <div className="dropdown-menu">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <ul className="menu-items">
          {filteredItems.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  value={item.value}
                  checked={selectedItems.some((selected) => selected.id === item.id)}
                  onChange={() => handleCheckboxChange(item)}
                />
                {item.value}
              </label>
            </li>
          ))}
        </ul>
        <div className="selected-items">
          <h4>Selected Items:</h4>
          <ul className="selected-list">
            {selectedItems.map((item) => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
