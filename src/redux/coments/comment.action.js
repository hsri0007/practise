import axios from "axios";

export const setComments = (item) => ({
  type: "COMMENT_TYPE",
  payload: item,
});

export const setCommentsAync = (payload) => {
  return (dispatch) => {
    axios
      .post("https://jsonplaceholder.typicode.com/comments", payload)
      .then((res) => dispatch(setComments(res.data)));
  };
};
