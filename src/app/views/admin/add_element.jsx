"use client";

import Image from "next/image";
import styles from "../../page.module.css";
import { useState } from "react";

export default function Add_element() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del producto:", formData);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Alta de Producto</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Nombre del Producto:
            <input
              type="text"
              name="name"
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Descripción:
            <textarea
              name="description"
              className={styles.textarea}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Precio:
            <input
              type="number"
              name="price"
              className={styles.input}
              value={formData.price}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Stock:
            <input
              type="number"
              name="stock"
              className={styles.input}
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Imagen (URL):
            <input
              type="url"
              name="image"
              className={styles.input}
              value={formData.image}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className={styles.submitBtn}>
            Guardar Producto
          </button>
        </form>
      </main>
    </div>
  );
}
