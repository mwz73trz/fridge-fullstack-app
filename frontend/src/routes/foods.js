import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import AllFoods from "../components/AllFoods";
import fridgeAPI from "../api/fridgeAPI";

export default function Foods(props) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    loadFoods();
  }, []);

  const loadFoods = async () => {
    const data = await fridgeAPI.allFoods();
    setFoods(data ? data : []);
  };

  const renderAllFoods = () => {
    return foods.map((food, index) => {
      return <AllFoods key={index} food={food} />;
    });
  };
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {renderAllFoods()}
        <Link to="add">Add Food</Link>
      </nav>
      <Outlet />
    </div>
  );
}
