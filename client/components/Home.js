//landing page / newsfeed

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div``;

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username, posts } = props;
  console.log("posts", typeof posts);
  const postsArr = Array.from(posts);

  return (
    <Container>
      <h3>Welcome, {username}</h3>
      <Wrapper>
        {postsArr.map((post) => {
          return (
            <li key={post.id}>
              {post.body} uploaded: {post.date}
            </li>
          );
        })}
      </Wrapper>
    </Container>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  console.log("state", state);
  return {
    username: state.auth.username,
    posts: state.posts,
  };
};

export default connect(mapState)(Home);
