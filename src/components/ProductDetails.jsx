import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({cart,setCart}) => {
  const {id} = useParams();
  const [product ,setProduct] = useState({})
  const [relatedProduct,setRelatedProduct] = useState([])

  useEffect(()=>{
    const filterProduct = items.filter((product)=>(product.id == id))
    setProduct(filterProduct[0])
    const relatedFilterProduct = items.filter((RProduct)=>(RProduct.category === product.category))
    console.log(relatedFilterProduct);
    
    setRelatedProduct(relatedFilterProduct);

  },[id,product.category])

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    // console.log(obj);
    console.log(cart);
    toast.success("item added successfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div>
          <div className="card-body">
            <h1 className="card-title">{product.title}</h1>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary mx-3">{product.price} ₹</button>
            <button
              onClick={() =>
                addToCart(
                  product.id,
                  product.price,
                  product.title,
                  product.description,
                  product.imgSrc
                )
              }
              className="btn btn-warning"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-center">Related Products</h1>
      <Product items={relatedProduct} cart={cart} setCart={setCart} />
    </>
  );
}

export default ProductDetails