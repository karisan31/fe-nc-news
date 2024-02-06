import axios from "axios";

const ncNewsData = axios.create({
  baseURL: "https://backend-recieve-nc-news.onrender.com/api/",
});

export const getArticles = (articleID) => {
  const url = articleID ? `articles/${articleID}` : `articles`;
  return ncNewsData
    .get(url)
    .then(({ data }) => {
      return { data };
    })
    .catch((err) => {
      throw err;
    });
};

export const getComments = (articleID) => {
  return ncNewsData.get(`articles/${articleID}/comments`).then(({ data }) => {
    return { data };
  });
};
