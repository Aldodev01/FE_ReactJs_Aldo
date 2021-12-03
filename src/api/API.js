import api from "./context";

export const data_get = async (data) => {
  try {
    const result = await api("/posts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    return result;
  } catch (error) {
    return error;
  }
};
