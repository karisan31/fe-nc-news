import axios from "axios";

const ncNewsData = axios.create({
  baseURL: "https://backend-recieve-nc-news.onrender.com/api/",
});

export const getArticles = (searchParam) => {
  //const url = articleID ? `articles/${articleID}` : `articles`;
  let url = "articles";
  if (typeof searchParam === "number") {
    url += `/${searchParam}`;
  } else if (typeof searchParam === "string") {
    url += `?topic=${searchParam}`;
  }

  return ncNewsData.get(url).then(({ data }) => {
    return { data };
  });
};

export const getComments = (articleID) => {
  return ncNewsData.get(`articles/${articleID}/comments`).then(({ data }) => {
    return { data };
  });
};

export const patchVotes = (articleID, updateVote) => {
  return ncNewsData
    .patch(`articles/${articleID}`, updateVote)
    .then((response) => {
      return response.data;
    });
};

export const getUsers = () => {
  return ncNewsData
    .get("/users")
    .then(({ data }) => {
      return { data };
    })
    .catch((err) => {
      throw err;
    });
};

export const postComment = (articleID, newComment) => {
  return ncNewsData
    .post(`articles/${articleID}/comments`, newComment)
    .then((response) => {
      return response.data;
    });
};

export const deleteComment = (commentID) => {
  return ncNewsData.delete(`comments/${commentID}`);
};

export const getTopics = () => {
  return ncNewsData.get("/topics").then(({ data }) => {
    return { data };
  });
};
