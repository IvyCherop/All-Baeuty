import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

// import { product } from '../testData';
import { getProduct, updateItem } from "../redux2/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
const EditItem = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(productId));
    return () => dispatch(getProduct());
  }, [dispatch, productId]);

  const updateProduct = useSelector((state) => state.updateProduct);
  useEffect(() =>{
    alert("Product updated successfully")
  },[updateProduct.product])
  const singleProduct = useSelector((state) => state.product);
  const { product, loading } = singleProduct;

  const [name, setName] = useState(product?.name);
  const [price, setPrice] = useState(product?.price);
  const [category, setCategory] = useState(product?.category);
  const [initialPrice, setInitialPrice] = useState(
    product?.initialPrice && product.initialPrice
  );
  const [description, setDescription] = useState(product?.description);
  const [freeShipping, setFreeShipping] = useState(product?.freeShipping);
  const [company, setCompany] = useState(product?.company);
  const [colors, setColors] = useState(product?.colors);

  const [image, setImage] = useState(product?.image);

  if (loading) {
    return <Loading />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateItem({
        image,
        description,
        initialPrice,
        category,
        name,
        price,
        company,
        colors,
        // freeShipping,
        productId,
      })
    );
  };
  return (
    <ItemWrapper>
      <Link to="/">
        <BackButton>Back to All</BackButton>
      </Link>
      <CompanyName>
        Company:<NameSpan>{product?.company}</NameSpan>
      </CompanyName>
      <Wrapper>
        <ImageContainer>
          <Image src={product?.image}></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>{product?.name}</Title>
          <Prices>
            <Price>
              Kshs.
              <Span>{product?.price}</Span>
            </Price>
            <Initial>
              Was Kshs.<SpanTwo>{product?.initialPrice}</SpanTwo>
            </Initial>
          </Prices>
          <Filter>
            <FilterTitle>Colors:</FilterTitle>
            {product?.colors?.map((c) => (
              <FilterColor color={c} key={c} />
            ))}
          </Filter>

          <Description>
            <TitleDesc>Description:</TitleDesc>
            <Desc>{product?.description}</Desc>
          </Description>
        </InfoContainer>
      </Wrapper>

      <EditContainer>
        <Header>Update this product</Header>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label htmlFor="">Product Name</Label>
            <Input
              name="name"
              value={product?.name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="">Product Price</Label>
            <Input
              name="price"
              value={product?.price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="">InitialPrice</Label>
            <Input
              placeholder="initial price"
              value={product?.initialPrice}
              name="initialPrice"
              onChange={(e) => setInitialPrice(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="">CompanyName</Label>
            <Input
              name="company"
              placeholder="company"
              value={product?.company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="">Product Image</Label>
            <Input
              name="image"
              value={product?.image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="">Product Category</Label>
            <Input
              name="category"
              value={product?.category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category (lowercase)"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="">Free Shipping</Label>
            <Input
              placeholder="Free Shipping ? true/false"
              name="freeShipping"
              onChange={(e) => setFreeShipping(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="">Colors</Label>
            <Input name="coolors" onChange={(e) => setColors(e.target.value)} />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="">Product Description</Label>
            <TextArea
              name="description"
              value={product?.description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              rows={7}
            />
          </InputWrapper>

          <EditButton>
            {updateProduct.loading ? "Updating..." : "Update Item"}
          </EditButton>
        </Form>
      </EditContainer>
    </ItemWrapper>
  );
};
const ItemWrapper = styled.div`
  padding-top: 40px;
  overflow-y: auto;
  width: 100vw;
  height: 100%;
  /* padding-top: 0; */
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  width: 400px;

  /* background: lightgray; */
  border-radius: 6px;
  transition: all 0.3s linear;
  box-shadow: 1px 4px 13px lightgray;
  &:hover {
    box-shadow: 2px 4px 18px gray;
  }
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding: 20px;
  flex-direction: column;
  padding-bottom: 6px;
  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;
const Form = styled.form`
  width: 96vw;
  max-width: 500px;
  margin: 20px auto;
`;

const BackButton = styled.button`
  padding: 5px 15px;
  background: #b2f9fc;
  border-radius: 12px;
  transition: all 0.4s linear;
  display: flex;
  align-self: center;
  margin: auto;
  border: 1px solid blue;
  cursor: pointer;
  &:hover {
    color: ivory;
    background: #113cfc;
  }
`;
const Input = styled.input`
  outline: none;
  padding: 4px 6px;
  border-radius: 4px;
  border: 1px solid cadetblue;
`;
const Label = styled.label`
  padding-bottom: 8px;
`;
const TextArea = styled.textarea`
  margin-bottom: 8px;
  border: 1px solid cadetblue;
  border-radius: 4px;
  padding: 6px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.h3`
  font-size: 19px;
  margin-top: 20px;
  margin-left: 40vw;
  text-decoration: underline 2px;
  color: #082032;
`;
const EditButton = styled.button`
  padding: 8px 14px;
  margin-top: 9px;
  font-size: 15px;
  border: 1px solid chartreuse;
  border-radius: 4px;
  cursor: pointer;
  background: lightcyan;
  transition: all 0.7s linear;
  &:hover {
    background: cyan;
  }
`;
const EditContainer = styled.div``;

const Initial = styled.h6`
  color: #105652;
  text-decoration: line-through;
  margin-left: 80px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 8px;
  cursor: pointer;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 25px;
  font-weight: 400;
`;

const CompanyName = styled.div`
  display: flex;
  background: f4f4f4;
  padding-top: 4px;
  padding-bottom: 4px;
  max-width: 600px;

  color: #082032;
  justify-content: center;
  margin: 10px auto;
`;
const NameSpan = styled.span`
  color: #e93b81;
  font-weight: 700;
  padding-left: 4px;
  &:hover {
    text-decoration: underline;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  width: 94%;
`;
const Image = styled.img`
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  object-fit: contain;
`;
const InfoContainer = styled.div``;

const Description = styled.div`
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
`;
const Desc = styled.p``;
const TitleDesc = styled.h6`
  padding-bottom: 6px;
  font-size: 17px;
`;

const Prices = styled.div`
  display: flex;
`;
const Price = styled.h5`
  color: #082032;
`;
const Span = styled.span`
  color: #2f86a6;
`;
const SpanTwo = styled.span`
  color: pink;
`;

const Title = styled.h6`
  font-size: 14px;
  color: #ff5da2;
  /* cursor:pointer; */
  /* &:hover{
        text-decoration:underline;
    } */
`;

export default EditItem;
