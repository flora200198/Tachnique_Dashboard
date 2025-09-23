import React, { useState, useEffect } from "react";

const UserForm = ({ selectedUser, onSave, onCancel }) => {
  const [form, setForm] = useState({ name: "", email: "", company: { name: "" } });

  useEffect(() => {
    if (selectedUser) setForm(selectedUser);
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "company") {
      setForm({ ...form, company: { name: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert("Name and Email required!");
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      <div className="mb-2">
        <input type="text" name="name" className="form-control" placeholder="Full Name"
          value={form.name} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <input type="email" name="email" className="form-control" placeholder="Email"
          value={form.email} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <input type="text" name="company" className="form-control" placeholder="Department"
          value={form.company?.name} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-success me-2">Save</button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default UserForm;
