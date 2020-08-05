import React, { useState } from "react";
import { connect } from "react-redux";
import { setCommentsAync } from "./redux/coments/comment.action";

function App({ comments, setCommentsAync }) {
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setCommentsAync({
      postId: 2,
      id: 2,
      name,
      email: "Eliseo@gardner.biz",
      body:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" className="submit" />
      </form>
    </div>
  );
}

const mapdispacthToprops = (dispacth) => ({
  setCommentsAync: (user) => dispacth(setCommentsAync(user)),
});

export default connect(null, mapdispacthToprops)(App);
