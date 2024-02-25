import { customAxios } from "./custom-axios";

export const getCurrentUser = async () => {
  try {
    const { data } = await customAxios.get("/current-user");
    return data;
  } catch (error) {
    return null;
  }
};
