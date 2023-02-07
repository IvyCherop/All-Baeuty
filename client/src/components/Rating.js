import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
const Rating = () => {
  const [rating, setRatingValue] = useState(null);
  const [hoverValue, setHoverValue] = useState(null);
  return (
    <div>
      {Array(5)
        .fill()
        .map((_, i) => {
          const ratingValue = i + 1;
          return (
            <Label key={i}>
              <Input
                type="radio"
                name="rating"
                value={ratingValue}
                onChange={() => setRatingValue(ratingValue)}
              />
              <Star>
                <FaStar
                  color={
                    ratingValue <= (hoverValue || rating)
                      ? "#ffc107"
                      : "#e4e5e6"
                  }
                  size={30}
                  onMouseEnter={() => setHoverValue(ratingValue)}
                  onMouseLeave={() => setHoverValue(null)}
                />
              </Star>
            </Label>
          );
        })}
    </div>
  );
};
const Input = styled.input`
  display: none;
`;
const Label = styled.label``;
const Star = styled.span`
  transition: color 0.2s;
  cursor: pointer;
`;

export default Rating;
