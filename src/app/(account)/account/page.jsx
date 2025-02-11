"use client";
import useAuthStore from "@/stores/authStore";
import { useEffect, useState } from "react";
import { API_URL } from "@/helpers/constants";
import styles from "./page.module.scss";
import fetchFromAPI from "@/helpers/fetchFromAPI";

async function getOrders(userId) {
  try {
    const data = await fetchFromAPI("/api/orders", {
      query: `where[user][equals]=${userId}`,
      cache: "no-store",
    });
    console.log(data);
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}

export default function DashboardPage() {
  const { user, token } = useAuthStore();

  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [ordersError, setOrdersError] = useState("");

  useEffect(() => {
    if (user) {
      setLoadingOrders(true);
      const userId = user._id || user.id;
      const userEmail = user.email;
      getOrders(userId)
        .then((ordersData) => {
          setOrders(ordersData);
          setLoadingOrders(false);
        })
        .catch((error) => {
          setOrdersError("Failed to load orders");
          setLoadingOrders(false);
        });
    }
  }, [user]);

  const SkeletonRow = () => (
    <tr className={styles.skeletonRow}>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
      <td>
        <div className={styles.skeletonCell}></div>
      </td>
    </tr>
  );

  return (
    <div>
      {loadingOrders ? (
        <div className={styles.orderWrap}>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Items</th>
                <th>Date</th>
                <th>Price</th>
                <th>Order Status</th>
                <th>Download</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(3)].map((_, index) => (
                <SkeletonRow key={`skeleton-${index}`} />
              ))}
            </tbody>
          </table>
        </div>
      ) : ordersError ? (
        <p style={{ color: "red" }}>{ordersError}</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className={styles.orderWrap}>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Items</th>
                <th>Date</th>
                <th>Price</th>
                <th>Order Status</th>

                <th>Download</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id || order.orderNumber}>
                  <td>#{order.orderNumber}</td>
                  <td>
                    {order.items.map((item, index) => (
                      <div key={index}>{item.product.title}</div>
                    ))}
                  </td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>{order.status}</td>

                  <td>
                    {order.items.map((item, itemIndex) => {
                      if (
                        item.product.files?.length > 0 &&
                        order.status === "completed"
                      ) {
                        return (
                          <div
                            key={`order-${order.orderNumber}-item-${itemIndex}`}
                          >
                            {item.product.files.map((file, fileIndex) => (
                              <div
                                key={`order-${order.orderNumber}-item-${itemIndex}-file-${fileIndex}`}
                              >
                                <a href={`${API_URL}${file.file.url}`} download>
                                  {file.file.filename}
                                </a>
                              </div>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </td>

                  <td>
                    {order.invoice && (
                      <a href={`${API_URL}${order.invoice.url}`} download>
                        {order.invoice.filename}
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
