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
  return ncNewsData
    .get(`articles/${articleID}/comments`)
    .then(({ data }) => {
      return { data };
    })
    .catch((err) => {
      throw err;
    });
};

export const patchVotes = (articleID, updateVote) => {
  return ncNewsData
    .patch(`articles/${articleID}`, updateVote)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
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
    })
    .catch((err) => {
      throw err;
    });
};

export const deleteComment = (commentID) => {
  return ncNewsData.delete(`comments/${commentID}`).catch((err) => {
    throw err;
  });
};
