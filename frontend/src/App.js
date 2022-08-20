import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Fridge App</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/foods">Foods</Link>
      </nav>
      <Outlet />
    </div>
  );
}
