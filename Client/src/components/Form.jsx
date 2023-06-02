import React from "react";
import { useState } from "react";
import validation from "./validation";
import "../hojas-de-estilo/Form.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  console.log(userData);

  return (
    <div className="form-component">
      <form onSubmit={handleSubmit}>
        <img
          className="logo"
          src={require(`../imagen/Rick-And-Morty.png`)}
          alt="Login Rick"
        />
        <label className="texto" htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          value={userData.email}
          name="email"
          onChange={handleChange}
          placeholder="abc@gmail.com"
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label className="texto" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          value={userData.password}
          name="password"
          onChange={handleChange}
          placeholder="*************"
          required
          maxLength="10"
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button className="btn-envio">Submit</button>
      </form>
    </div>
  );
};

export default Form;
