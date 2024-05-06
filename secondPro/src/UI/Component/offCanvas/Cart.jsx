import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
// import { fetchCart } from "../../../Redux/feature/Product/Cart";
import "./Cart.css";
import axios from "axios";
import {
  addCart,
  fetchCart,
  refetch,
  
} from "../../../Redux/feature/Product/Cart";

export default function Cart({ isOpen, toggleOffcanvas }) {
  const dispatch = useDispatch();
  const { error, cart, pending, cartId } = useSelector(
    (store) => store.cartSlice
  );
  const data = useSelector((state) => state.authSlice);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const dcrementeHnadler = (productId, count, id) => {
    let isRemove = false;
    if (id || count === 1) {
      isRemove = true;
    }
    axios({
      method: "put",
      url: `http://localhost:9999/cart/update`,
      data: {
        _id: cartId,
        productId,
        isRemove,
      },
      headers: {
        authorization: `Bearer ${data?.token}`,
        "Content-Type": "application/json",
      },
    })?.then((res) => {
      dispatch(addCart(res.data));
    });
  };

  const IncreamentHandler = (id) => { 
    // e.preventDefault(); 
    axios({
      method: "post",
      url: `http://localhost:9999/cart/create/${id}`,
      headers: {
        Authorization: `Bearer ${data.token}`, 
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch(refetch());
        // dispatch(addCart(res.data));

        // const updatedItem = res.data;
        // dispatch(addCart(updatedItem));
      })
      .catch((err) => {
        alert("Failed to increment quantity", err);
      });
  };
  
  return (
    <div>
      <div>
        {pending ? (
          <h1>loading</h1>
        ) : (
          <Offcanvas
            style={{ width: "100%" }}
            isOpen={isOpen}
            toggle={toggleOffcanvas}
            direction="end"
          >
            <OffcanvasHeader toggle={toggleOffcanvas}>
              Offcanvas
            </OffcanvasHeader>
            <OffcanvasBody
              style={{
                margin: "20px",
              }}
            >
              <h1>Shopping Cart</h1>

              <div className="shopping-cart">
                <div className="column-labels">
                  <label className="product-image">Image</label>
                  <label className="product-details">Product</label>
                  <label className="product-price">Price</label>
                  <label className="product-quantity">Quantity</label>
                  <label className="product-removal">Remove</label>
                  <label className="product-line-price">Total</label>
                </div>

                {cart?.map((e,i) => {
                  console.log("🚀 ~ {cart.map ~ cart:=-=-==-=-->>>>>>>>", cart)
                  return (
                    
                    <div className="product" key={i}>
                      <div className="product-image">
                        <img src={e?.productId?.thumbnail} />
                      </div>
                      <div className="product-details">
                        <div className="product-title">{e?.productId?.title}</div>
                        <p className="product-description">
                          {e?.productId?.description}
                        </p>
                      </div>
                      <div className="product-price">{e?.productId?.price}</div>
                      <div className="product-quantity">
                        <div className="d-flex gap-3">
                          <Button
                            onClick={() =>
                              dcrementeHnadler(e.productId._id, e.count)
                            }
                            className="bg-transparent text-black fw-bolder  "
                          >
                            -
                          </Button>
                          <p>{e.count}</p>
                          {/* <Button onClick={(e)=>IncreamentHandler(cartId)} className="bg-transparent text-black fw-bolder  ">
                            +
                          </Button> */}

                          <Button
                          role="button"
                            onClick={() => IncreamentHandler(e?.productId?._id)}
                            className="bg-transparent text-black fw-bolder"
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="product-removal">
                        <button
                          onClick={() =>
                            dcrementeHnadler(e?.productId?._id, e.count, e._id)
                          }
                          className="remove-product"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="product-line-price">45.99</div>
                    </div>
                  );
                })}

                <div className="totals">
                  <div className="totals-item">
                    <label>Subtotal</label>
                    <div className="totals-value" id="cart-subtotal">
                      71.97
                    </div>
                  </div>
                  <div className="totals-item">
                    <label>Tax (5%)</label>
                    <div className="totals-value" id="cart-tax">
                      3.60
                    </div>
                  </div>
                  <div className="totals-item">
                    <label>Shipping</label>
                    <div className="totals-value" id="cart-shipping">
                      15.00
                    </div>
                  </div>
                  <div className="totals-item totals-item-total">
                    <label>Grand Total</label>
                    <div className="totals-value" id="cart-total">
                      90.57
                    </div>
                  </div>
                </div>

                <button className="checkout">Checkout</button>
              </div>
            </OffcanvasBody>
          </Offcanvas>
        )}
      </div>
    </div>
  );
}
