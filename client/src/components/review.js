// import axios from "axios";
import { FaStar } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
const Review = ({ user, reviewername, title, rating }) => {
  return (
    <Wrapper>
      <Name>{reviewername ? reviewername : user.slice(0, 5)}</Name>

      <Rating>
        {Array(rating)
          .fill()
          .map((_, i) => {
            return (
              <Star key={i}>
                <FaStar />
              </Star>
            );
          })}
      </Rating>
      {/* stars za comment section */}
      <Comment>{title}</Comment>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  margin: 7px 0;
  border-bottom: 1px dotted lightgray;
`;
const Name = styled.h5``;

const Star = styled.div`
  color: yellow;
  padding-right: 1px;
`;
const Comment = styled.h6``;
const Rating = styled.span`
  display: flex;
  margin-right: 3px;
  margin-left: 3px;
`;

export default Review;
