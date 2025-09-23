// src/components/FilterPopup.js
import React, { useState } from "react";

const FilterPopup = ({ onApply, onClose }) => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply(filters);
    onClose(); // close after applying
  };

  return (
    <div className="filter-popup">
      <h3>Filter Users</h3>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={filters.firstName}
          onChange={handleChange}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={filters.lastName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={filters.email}
          onChange={handleChange}
        />

        <label>Department</label>
        <input
          type="text"
          name="department"
          value={filters.department}
          onChange={handleChange}
        />

        <div className="form-actions">
          <button type="submit">Apply</button>
          <button type="button" onClick={onClose} style={{ background: "#6c757d" }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterPopup;
