import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fridgeAPI from "../api/fridgeAPI";

export default function Food(props) {
  const params = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    loadFood();
  }, [params.id]);

  const loadFood = async () => {
    console.log(params.id);
    let data = await fridgeAPI.foodByID(params.id);
    setFood(data);
  };

  const renderFood = () => {
    if (!food) {
      return null;
    }
    return (
      <main style={{ padding: "1rem" }}>
        <h2>Food Item: {food.title}</h2>
        <p>
          Amount: {food.amount}
          {food.amount_type}
        </p>
        <p>Best Used Before Date: {food.best_before_end}</p>
      </main>
    );
  };
  return <div>{renderFood()}</div>;
}
