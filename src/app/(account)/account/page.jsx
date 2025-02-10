"use client";
import useAuthStore from "@/stores/authStore";
import { useEffect, useState } from "react";
import { API_URL } from "@/helpers/constants";
import styles from "./page.module.scss";

async function getOrders(userId, token, userEmail) {
  try {
    const url = `${API_URL}/api/orders?where[user][equals]=${userId}`;
    console.log(url);
    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}

export default function DashboardPage() {
  const { user, token } = useAuthStore();

  // Orders state
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [ordersError, setOrdersError] = useState("");

  // Fetch orders using the external API once the user is available.
  useEffect(() => {
    if (user) {
      setLoadingOrders(true);
      const userId = user._id || user.id;
      const userEmail = user.email;
      getOrders(userId, token, userEmail)
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

  return (
    <div>
      {loadingOrders ? (
        <p>Loading orders...</p>
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
                      // Return null if there are no files to show for this item.
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
