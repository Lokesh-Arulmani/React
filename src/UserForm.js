import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    userId: uuidv4(),  // Auto-generate unique user ID
  });

  useEffect(() => {
    window.onbeforeunload = () => {
      if (formData.name || formData.address || formData.email || formData.phone) {
        return "You have unsaved changes!";
      }
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to LocalStorage or Redux here
    localStorage.setItem("userData", JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
