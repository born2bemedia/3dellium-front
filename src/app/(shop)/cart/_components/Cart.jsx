"use client";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@/icons/DeleteIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useCartStore from "@/stores/cartStore"; // Імпорт Zustend Store

const Cart = () => {
  const {
    cart,
    deleteFromCart,
    clearCart,
    totalAmount,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f4f4f4",
              padding: "100px 20px",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "700px",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              {cart.length > 0 ? (
                <section>
                  <h1
                    style={{
                      fontSize: "24px",
                      textAlign: "center",
                      marginBottom: "20px",
                      color: "#1d4c29",
                    }}
                  >
                    Cart
                  </h1>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr 1fr 1fr",
                      padding: "10px",
                      fontWeight: "bold",
                      borderBottom: "2px solid #ddd",
                    }}
                  >
                    <div>Service Name</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Subtotal</div>
                  </div>

                  <div>
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "2fr 1fr 1fr 1fr",
                          alignItems: "center",
                          padding: "10px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <button
                            onClick={() => deleteFromCart(item.id)}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            <DeleteIcon />
                          </button>
                          <span style={{ fontSize: "16px", fontWeight: "500" }}>
                            {item.name}
                          </span>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          €{item.attributes.price}
                        </div>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "10px",
                            }}
                          >
                            <img
                              src="/images/cart/minus.svg"
                              style={{
                                width: "20px",
                                cursor: "pointer",
                              }}
                              onClick={() => decreaseQuantity(item.id)}
                            />
                            <span
                              style={{ fontSize: "16px", fontWeight: "500" }}
                            >
                              {item.quantity}
                            </span>
                            <img
                              src="/images/cart/plus.svg"
                              style={{
                                width: "20px",
                                cursor: "pointer",
                              }}
                              onClick={() => increaseQuantity(item.id)}
                            />
                          </div>
                        </div>
                        <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                          €{item.quantity * item.attributes.price}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "15px 0",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    <span>Total:</span>
                    <span>€{totalAmount}</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "20px",
                    }}
                  >
                    <Link
                      href="/checkout"
                      style={{
                        display: "inline-block",
                        padding: "12px 20px",
                        backgroundColor: "#1d4c29",
                        color: "#fff",
                        textDecoration: "none",
                        borderRadius: "5px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "background 0.3s",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#000")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#1d4c29")
                      }
                    >
                      Checkout
                    </Link>
                  </div>
                </section>
              ) : (
                <div style={{ textAlign: "center", padding: "50px" }}>
                  <h1
                    style={{
                      fontSize: "24px",
                      marginBottom: "10px",
                      color: "#1d4c29",
                    }}
                  >
                    Your cart is empty.
                  </h1>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#555",
                      marginBottom: "20px",
                    }}
                  >
                    Discover our wide array of business and marketing consulting
                    services!
                  </p>
                  <Link
                    href="/"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: "#1d4c29",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "5px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "background 0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#000")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#1d4c29")
                    }
                  >
                    Go home
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <section className="cart-wrap">
          <div className="_container"></div>
        </section>
      )}
    </>
  );
};

export default Cart;
