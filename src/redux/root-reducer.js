import { commentReducer } from "./coments/comment.reducer";
import { combineReducers } from "redux";

export default combineReducers({
  comments: commentReducer,
});
