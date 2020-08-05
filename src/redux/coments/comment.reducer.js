const INITIAL_STATE = {
  comments: [],
};

export const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "COMMENT_TYPE":
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    default:
      return state;
  }
};
