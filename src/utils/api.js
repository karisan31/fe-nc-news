import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://backend-recieve-nc-news.onrender.com/api/articles")
    .then(({ data }) => {
      return { data };
    });
};
