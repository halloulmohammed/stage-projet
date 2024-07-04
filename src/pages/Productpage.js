import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Comments } from "../component/Comments";
import { Featured } from "../component/Featured";
import "../style/singleprod.css";
import items from "./../data/Productlist";
export const Productpage = () => {
  const params = useParams();
  const id = params.id;
  const product = items[4].find((product) => product.id === id);
  const [size, setsize] = useState("");
  const showSize = (event) => {
    setsize(event.target.value);
  };
  const [quantity, setquantity] = useState(0);
  const addQuantity = (e) => {
    setquantity((e) => e + 1);
  };
  const takeQuantity = (e) => {
    if (e <= 0) {
      return 0; // Returning 0 or handling the case when quantity is 0 or negative
    } else {
      setquantity((currentQuantity) => Math.max(currentQuantity - 1, 0));
    }
  };
  return (
    <div>
      <div className="single-prod">
        <img src={product.pic} alt={product.title} id="prodimg" />
        <div className="prod-box">
          <h1>{product.title}</h1>
          <div id="discount">
            <h2>{product.price}</h2>
            <p>{product.lowprice}</p>
          </div>
          <h4>
            {product.rate}
            <i className="fa-solid fa-star star"></i>
          </h4>
          <h3>
            Size: <span>{size}</span>
          </h3>
          <div id="sizes">
            <div className="size">
              <input
                type="radio"
                id="S"
                name="size"
                value="S"
                onClick={showSize}
              />
              <label htmlFor="S">S</label>
            </div>
            <div className="size">
              <input
                type="radio"
                id="M"
                name="size"
                value="M"
                onClick={showSize}
              />
              <label htmlFor="M">M</label>
            </div>

            <div className="size">
              <input
                type="radio"
                id="L"
                name="size"
                value="L"
                onClick={showSize}
              />
              <label htmlFor="L">L</label>
            </div>
            <div className="size">
              <input
                type="radio"
                id="XL"
                name="size"
                value="XL"
                onClick={showSize}
              />
              <label htmlFor="XL">XL</label>
            </div>
            <div className="size">
              <input
                type="radio"
                id="XXL"
                name="size"
                value="XXL"
                onClick={showSize}
              />
              <label htmlFor="XXL">XXL</label>
            </div>
          </div>
          <div id="quantity">
            <input placeholder={quantity} />
            <button onClick={addQuantity}>+</button>
            <button onClick={takeQuantity}>-</button>
          </div>
          <div id="checkoutBtn">
            <button id="btn1">Add To Card</button>
            <button id="btn2">Shop Now</button>
          </div>
        </div>
      </div>
      <div id="description">
        <h3>Description</h3>
        <p>{product.description}</p>
        </div>
      <div id="related-product">
        <h3 className="section-title">Related products:</h3>
        <div id="product-containner">
          {items[2].map((item, i) => (
            <Featured
              key={i}
              id={item.id}
              pic={item.pic}
              title={item.title}
              price={item.price}
              rate={item.rate}
              review={item.review}
            />
          ))}
        </div>
      </div>
      <div id="review">
        <h3 className="section-title">Review:</h3>
        <div className="review">
          <Comments />
        </div>
      </div>
      
      
    </div>
  );
};
