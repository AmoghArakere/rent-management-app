import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [rents, setRents] = useState([]);
  const [form, setForm] = useState({ t_date: "", f_date: "", tariff: "", tax: "" });

  useEffect(() => {
    axios.get("http://localhost:8080/rents").then((res) => setRents(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/rents", form);
    setForm({ t_date: "", f_date: "", tariff: "", tax: "" });
    axios.get("http://localhost:8080/rents").then((res) => setRents(res.data));
  };

  return (
    <div style={styles.container}>
      <h2>Rent Management</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>T-Date</label>
        <input name="t_date" type="date" value={form.t_date} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>F-Date</label>
        <input name="f_date" type="date" value={form.f_date} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Tariff</label>
        <input name="tariff" type="number" value={form.tariff} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Tax</label>
        <input name="tax" type="number" value={form.tax} onChange={handleChange} required style={styles.input} />

        <button type="submit" style={styles.button}>Add Rent</button>
      </form>

      <ul>
        {rents.map((rent) => (
          <li key={rent.id} style={styles.listItem}>
            {rent.t_date} to {rent.f_date} - Tariff: {rent.tariff}, Tax: {rent.tax}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  button: {
    padding: "8px",
    fontSize: "14px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  listItem: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
};

export default App;
