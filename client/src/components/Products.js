import React from "react";
import Product from "./Product";
import Loading from "./Loading";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Products = () => {
  const allProducts = useSelector((state) => state.productsList);

  const { products, loading } = allProducts;
  return (
    <ProductsList>
      {loading ? (
        <Loading />
      ) : products?.length < 1 ? (
        <h1>Oops!!No Products match your search</h1>
      ) : (
        products?.map((product) => {
          return <Product key={product._id} {...product} />;
        })
      )}
    </ProductsList>
  );
};

const ProductsList = styled.div`
  /* display:flex;
    flex-wrap:wrap;
    grid-template-columns:repeat(autofit,minmax(370px,1fr)); */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-left: 20px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export default Products;
