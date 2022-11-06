const API = {
  APP_ID: "f5836537",
  APP_KEY: "9da2b3c7bf324c15d1e97fc1c3c4d457",
  ROOT_URL: "https://api.edamam.com",
};

export const API_URL = {
  fetchrecipe: (dish) =>
    `${API.ROOT_URL}/search?q=${dish}&app_id=${API.APP_ID}&app_key=${API.APP_KEY}`,
};
