import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fridgeAPI from "../api/fridgeAPI";

export default function AddFood(props) {
  const navigate = useNavigate();
  const [unit, setUnit] = useState("");

  const handleChange = (event) => {
    setUnit(event.target.value);
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const foodData = {
      title: evt.target.elements["title"].value,
      amount: evt.target.elements["amount"].value,
      amount_type: evt.target.elements["amount_type"].value,
      best_before_end: evt.target.elements["best_before_end"].value,
    };

    const data = await fridgeAPI.addFood(foodData);
    console.log(data);
    if (data) {
      navigate("/");
    }
  };
  return (
    <div>
      <h1>Add Food Page</h1>
      <form onSubmit={handleFormSubmit} method="POST">
        <label>Food Title: </label>
        <input name="title" placeholder="Food Title" />
        <br />
        <label>Amount: </label>
        <input name="amount" placeholder="Amount" />
        <br />
        <label>
          Amount Type:
          <select value={unit} onChange={handleChange} name="amount_type">
            <option value="tbsp">Tablespoon</option>
            <option value="tsp">Teaspoon</option>
            <option value="oz">Ounce</option>
            <option value="fl. oz">Fluid Ounce</option>
            <option value="c"> Cup</option>
            <option value="qt">Quart</option>
            <option value="pt">Pint</option>
            <option value="gal">Gallon</option>
            <option value="lb">Pound</option>
            <option value="ml">Mililiter</option>
            <option value="g">Gram</option>
            <option value="kg">Kilogram</option>
            <option value="l">Liter</option>
            <option value=" ">Nothing</option>
          </select>
        </label>
        <br />
        <label>Best Before Date: </label>
        <input name="best_before_end" placeholder="Best Before Date" />
        <br />
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}
