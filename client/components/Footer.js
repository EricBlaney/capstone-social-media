import React from "react";
import { connect } from "react-redux";
import { Container, Wrapper } from "../styledComponents/FooterStyles";

const Footer = () => {
  return (
    <Container>
      <Wrapper> © Footer</Wrapper>
    </Container>
  );
};
const mapState = (state) => {
  return {};
};
export default connect(mapState)(Footer);
