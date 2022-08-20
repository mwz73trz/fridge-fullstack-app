import { NavLink } from "react-router-dom";

export default function AllFoods(props) {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          display: "block",
          margin: "1rem 0",
          color: isActive ? "red" : "",
        };
      }}
      to={`/foods/${props.food.id}`}
      key={props.food.id}
    >
      {props.food.title}
    </NavLink>
  );
}
