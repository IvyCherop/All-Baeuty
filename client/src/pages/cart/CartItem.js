import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, alterCount } from "../../redux2/actions/cartActions";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
const SingleProduct = ({ colors, image, price, name, product, count }) => {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cart.cartItems[0].count);
  console.log(itemCount);
  const [color, setColor] = useState(colors && colors[0]);
  const [quantity, setQuantity] = useState(count);
  console.log(color);

  const changeCount = (e) => {
    setQuantity(e.target.value);
  };
  useEffect(() => {
    dispatch(alterCount({ productId: product, count: quantity }));
  }, [quantity, dispatch, product]);

  return (
    <ItemWrapper>
      <Wrapper>
        <ImageContainer>
          <Image src={image}></Image>
        </ImageContainer>
      </Wrapper>
      <Title>{name}</Title>
      <DeleteIcon onClick={() => dispatch(removeFromCart(product))}>
        <FaTrash />
      </DeleteIcon>
      <Filters>
        <FilterTitle>Color:</FilterTitle>
        <Filter onChange={(e) => setColor(e.target.value)}>
          {colors?.map((c) => (
            <FilterColor key={c}>{c}</FilterColor>
          ))}
        </Filter>
      </Filters>
      <Price>
        Kshs.
        <Span>{price}</Span>
      </Price>

      <Select onChange={changeCount} value={quantity}>
        {Array(5)
          .fill()
          .map((_, i) => {
            return <Option key={i + 1}>{i + 1}</Option>;
          })}
      </Select>
    </ItemWrapper>
  );
};
const Wrapper = styled.div`
  &:hover {
    box-shadow: 1px 3px 8px #ff5da2;
  }
`;
const ItemWrapper = styled.div`
  /* padding:90px; */
  display: flex;
  width: 60vw;
  /* background:lightgray; */
  padding-bottom: 3px;
  border-bottom: 1px solid lightgray;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 90vw;
  }
  @media screen and (max-width: 700px) {
    width: 93vw;
  }
`;

const DeleteIcon = styled.div`
  color: red;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100px;
`;
const Image = styled.img`
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  object-fit: contain;
`;

const Price = styled.h5`
  color: #082032;
  @media screen and (max-width: 700px) {
    font-size: 11px;
  }
`;
const Span = styled.span`
  color: #2f86a6;
  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

const Title = styled.h6`
  /* font-size:12px; */
  color: #ff5da2;
  cursor: pointer;
  width: 100px;
  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Filters = styled.div`
  display: flex;
  margin-right: 10px;
  margin-left: 6px;
`;
const FilterColor = styled.option``;

const Filter = styled.select`
  padding-left: 4px;
`;

const FilterTitle = styled.span`
  font-size: 15px;
  font-weight: 400;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const Select = styled.select`
  padding: 2px;
`;
const Option = styled.option``;

export default SingleProduct;
