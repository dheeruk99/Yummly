import { API_URL } from "../Utils";

const customfetch = async (url, { body, ...customConfig }) => {
  const headers = {
    "content-type": "application/json",
    Accept: "application/json",
  };

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig,
    },
  };

  try {
    const response = await fetch(url, config);

    const data = await response.json();
    return {
      data: data.hits,
    };
  } catch (error) {
    console.error(`Error in fetching data ${error}`);
  }
};

export const getRecipes = (input) => {
  const url = API_URL.fetchrecipe(input);

  return customfetch(url, {
    method: "GET",
  });
};
