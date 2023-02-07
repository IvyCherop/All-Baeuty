// import React, { useState } from 'react'
// import styled from'styled-components'
// const Filter = () => {
//     const [category,setCategory]=useState("all");
//     ;
//     const [sort,setSort]=useState("newest")
//     // const [active,setActive]=useState("all")
    
//     const handleChange=(e)=>{
//         // setActive(e.target.value);
//         setCategory(e.target.value)
//         console.log(category)
//     }
//     return (
//         <>
//         <Wrapper>
//             <Left>
//                 <SelectorMobile>
//                     Category:
//                     <Select  onchange={(e)=>setCategory(e.target.value)} >
//                         <Option value="all">All</Option>
//                         <Option value="face">Face</Option>
//                         <Option value="lips">Lips</Option>
//                         <Option value="eyes">Eyes</Option>
//                         <Option value="ears">Ears</Option>
//                         <Option value="nose">Nose</Option>  
//                     </Select>
                   
//                 </SelectorMobile>
//                 <Links onchange={handleChange} >
//                     <Link >All </Link>
//                     <Link >Face</Link>
//                     <Link>Lips</Link>
//                     <Link>Ears</Link>
//                     <Link>Eyes</Link>
//                     <Link>Nose</Link>
//                 </Links>
//             </Left>
//             <Right>
//                 Sort By:
//                 <Selector>
//                     <Select onchange={(e)=>setSort(e.target.value)}>
//                         <Option value="newest">Newest</Option>
//                         <Option value="ascending">Lowest Price</Option>
//                         <Option value="descending">Highest Price</Option>
//                         <Option value="topRated">Top Rated</Option>  
//                     </Select>
//                 </Selector>
//             </Right>
//         </Wrapper>
//         <Products category={category} sort={sort}/>
//         </>
//     )
// }
// const Left=styled.div`

// `
// const Wrapper=styled.div`
//     display:flex;
//     padding:20px;
//     @media screen and (min-width:800px){
//         width:70vw;
//         margin:auto;
//     }
//     justify-content:space-between;
// `
// const SelectorMobile=styled.div`
//     @media screen and (min-width:800px){
//         display:none;
//     }
// `
// const Link=styled.a`
//     color:#F037A5;
//     text-decoration:none;
//     padding:3px 6px;
//     cursor:pointer;
//     position:relative;
//     width:fit-content;
//     font-weight:500;
//     font-size:18px;
//     &::after{
//         content:"";
//         position:absolute;
//         width:96%;
//         height:4.5px;
//         left:0;
//         background:#082032;
//         border-radius:5px;
//         top:25px;
//         opacity:0;
//         opacity:${props=>props.active&&1}
//     }
    
//     &:hover{
//         opacity:0.8;
//         // background:gray;
//         &::after{
//             opacity:1;
//         }
//     }    
// `
// const Links=styled.div`
//     display:flex;
//     @media screen and (max-width:800px){
//         display:none;
//     }

// `
// const Right=styled.div`
//     display:flex;
//     text-align:center;
//     align-items:center;
// `
// const Select=styled.select`

// `
// const Selector=styled.div`
//     margin-left:6px;
// `

// const Option=styled.option``

// export default Filter;
