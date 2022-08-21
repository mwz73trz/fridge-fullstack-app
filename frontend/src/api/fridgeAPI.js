import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const fridgeAPI = {};

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    console.log("RESPONSE:", response);
    console.log("RESPONSE DATA:", response.data);
    return response.data ? response.data : { message: "successs" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

fridgeAPI.allFoods = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}foods/`));
};

fridgeAPI.foodByID = async (foodId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}foods/${foodId}/`));
};

fridgeAPI.addFood = async (foodData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}foods/`, foodData));
};

export default fridgeAPI;
