import axios from "axios";

const ncNewsData = axios.create({
  baseURL: "https://backend-recieve-nc-news.onrender.com/api/",
});

export const getArticles = (articleID, topic, sort_by, order) => {
  let url = articleID ? `articles/${articleID}` : `articles`;
  let params = {};

  if (topic) {
    params.topic = topic;
  }

  if (sort_by) {
    params.sort_by = sort_by;
  }

  if (order) {
    params.order = order;
  }

  return ncNewsData
    .get(url, {
      params,
      paramsSerializer: function paramsSerializer(params) {
        return Object.entries(params)
          .map(([key, value]) => `${key}=${value}`)
          .join("&");
      },
    })
    .then(({ data }) => {
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
