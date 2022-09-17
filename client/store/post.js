import axios from "axios";

const initialState = {
  posts: [],
};

const posts = (state = initialState, action) => {
  if (action.type === "SET_POSTS") {
    return action.posts;
  }
  if (action.type === "CREATE_POST") {
    return [action.post, ...state];
  }
  if (action.type === "UPDATE_POST") {
    return state.map((post) =>
      post.id === action.post.id ? action.post : post
    );
  }
  if (action.type === "DELETE_POST") {
    return state.filter((post) => post.id !== action.post.id);
  }
  return state;
};

export const setPosts = () => {
  return async (dispatch) => {
    const posts = (await axios.get("/api/posts")).data;
    console.log(posts);
    dispatch({ type: "SET_POSTS", posts });
  };
};

export default posts;
