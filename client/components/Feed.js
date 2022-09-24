//landing page / newsfeed

import React from "react";
import { connect } from "react-redux";
import PostCreateForm from "./PostCreateForm";
import { Box } from "@mui/material";
import { addLike } from "../store";
import PostHelper from "./PostHelper";
/**
 * COMPONENT
 */
const Feed = ({ posts, auth, photos }) => {
  return (
    <Box flex={5} p={1}>
      <h3>Welcome, {auth.username}</h3>
      <PostCreateForm />
      <PostHelper posts={posts} auth={auth} photos={photos} />
    </Box>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  const followedList = [];
  state.connections.map((connection) => {
    if (
      connection.followingId === state.auth.id
    ) {
      followedList.push(connection.followerId);
    }
  });
  const posts =
    state.posts.filter(
      (post) =>
        followedList.includes(post.userId) || post.userId === state.auth.id
    ) || [];
  return {
    posts,
    auth: state.auth,
    photos: state.photos,
  };
};
// const mapDispatch = (dispatch) => {
//   return {
//     addLike: (authId, postId) => {
//       dispatch(addLike(authId, postId));
//     },
//   };
// };

export default connect(mapState)(Feed);
