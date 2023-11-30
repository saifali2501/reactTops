import React, { useState } from 'react';

const MultipleInputForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email.length > 0 &&
      formData.password.length > 0 &&
      formData.firstName.length > 0 &&
      formData.lastName.length > 0
    ) {
      setTableData([...tableData, formData]);
      setFormData({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MultipleInputForm;
