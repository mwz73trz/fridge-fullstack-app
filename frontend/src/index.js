import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Foods from "./routes/foods";
import Food from "./routes/food";
import AddFood from "./routes/AddFood";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="foods" element={<Foods />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an item in the fridge.</p>
              </main>
            }
          />
          <Route path=":id" element={<Food />} />
          <Route path="add" element={<AddFood />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </Router>
);
